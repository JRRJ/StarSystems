import React, { useEffect, useState } from "react"
import { useColorMode } from 'theme-ui'
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import DefaultScene from "../scenes/defaultScene"

// @jsx jsx
import { jsx } from 'theme-ui'
import { navigate } from "gatsby"

const SceneComponent = props => {
  const [ colorMode ] = useColorMode()

  let canvas = React.createRef()
  let label = React.createRef()
  let renderer
  let scene
  let camera
  let controls
  let raycaster

  let mouse = new THREE.Vector2()
  let labelPosition = new THREE.Vector2()

  let focusObject
  let running = false

  useEffect(() => {
    setupRenderer()
    setupScene()
    setupCamera()
    setupControls()
    setupLights()
    buildScene()
    running = true
    animate()

    return () => {
      running = false
      renderer = null
      scene = null
      camera = null
      controls = null
      raycaster = null
      mouse = null
      labelPosition = null
      focusObject = null
    }
  }, [colorMode])

  const setupCamera = () => {
    let { innerWidth: width, innerHeight: height } = window
    width = 900
    height = 900
    camera = new THREE.PerspectiveCamera(45, width / height, 10, 1000)
    camera.position.set(0, 0, 20)
  }

  const setupRenderer = () => {
    let { innerWidth: width, innerHeight: height } = window
    width = 900
    height = 900
    
    renderer = new THREE.WebGLRenderer({
      canvas: canvas.current,
      antialias: true,
      preserveDrawingBuffer: false
    })

    const pixelRatio = Math.max(2, window.devicePixelRatio)
    renderer.setPixelRatio(pixelRatio)
    renderer.setSize(width, height)
  }

  const setupControls = () => {
    controls = new OrbitControls( camera, renderer.domElement )
  }

  const setupScene = () => {
    scene = new THREE.Scene()
    scene.background = new THREE.Color(colorMode === 'default' ? 0xffffff : 0x000000)
  }

  const buildScene = () => {
      raycaster = new THREE.Raycaster()
      const sceneToBuild = props.scene ?? DefaultScene()
      sceneToBuild.meshes.forEach(mesh => {
        scene.add(mesh)
      })
  }

  const setupLights = () => {
  }

  const animate = () => {
    // Start loop again
    if (running) {
      requestAnimationFrame(animate)

      raycaster.setFromCamera(mouse, camera)
      let intersects = raycaster.intersectObjects(scene.children)
      if (intersects.length > 0) {
        if (intersects[0].object.name !== focusObject) {
          console.log(focusObject, intersects[0].object.name)
          focusObject = intersects[0].object.name
          label.current.innerHTML = focusObject
          label.current.style.top = `${labelPosition.y - 30}px`
          label.current.style.left = `${labelPosition.x}px`
        }
      } else if (focusObject !== null) {
        focusObject = null
        label.current.innerHTML = ``
      }
  
      renderer.render(scene, camera)
    }
  }

  const handleOnMouseMove = event => {
    const rect = canvas.current.getBoundingClientRect()

    labelPosition.x = event.pageX
    labelPosition.y = event.pageY

    mouse.x = ( (event.clientX - rect.left) / rect.width ) * 2 - 1
    mouse.y = - ( (event.clientY - rect.top) / rect.height ) * 2 + 1
  }

  const handleOnMouseClick = event => {
    console.log(`/system/${focusObject}`)
    event.preventDefault()
    if (focusObject) {
      console.log(`/system/${focusObject}`)
      navigate(`/system/${focusObject}`)
    }
  }

  return (
    <div className="three-container" onMouseMove={handleOnMouseMove}>
      <canvas id="three-canvas" ref={canvas} onMouseUp={handleOnMouseClick} />
      <div
        sx={{
          position: `absolute`
        }}
        ref={label}>
      </div>
    </div>
  )
}

export default SceneComponent