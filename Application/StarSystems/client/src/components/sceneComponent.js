import React, { useEffect } from "react"
import { useColorMode } from 'theme-ui'
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import DefaultScene from "../scenes/defaultScene"

const SceneComponent = props => {
  const [ colorMode ] = useColorMode()

  let canvas = React.createRef()
  let controls
  let camera
  let renderer
  let scene

  useEffect(() => {
    setupRenderer()
    setupScene()
    setupCamera()
    setupControls()
    setupLights()
    //setupPostprocessing()
    buildScene()
      .then(() => {
        animate()
      })
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
    return new Promise((resolve) => {
      const sceneToBuild = props.scene ?? DefaultScene()
      sceneToBuild.meshes.forEach(mesh => {
        scene.add(mesh)
      });
      resolve()
    })
  }

  const setupLights = () => {
  }

  const animate = () => {
    // Start loop again
    requestAnimationFrame(animate)
    
    renderer.render(scene, camera)
  }

  return (
    <div className="three-container">
      <canvas id="three-canvas" ref={canvas} />
    </div>
  )
}

export default SceneComponent