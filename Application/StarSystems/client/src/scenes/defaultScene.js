import * as THREE from "three"

const DefaultScene = () => {
  const geometry = new THREE.SphereGeometry( 5, 32, 32 )
  const material = new THREE.MeshBasicMaterial( {
    color: 0x000000,
    wireframe: true
  })
  return {
    meshes: [new THREE.Mesh( geometry, material )]
  }
}

export default DefaultScene