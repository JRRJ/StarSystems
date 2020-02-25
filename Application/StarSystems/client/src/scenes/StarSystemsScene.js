import * as THREE from "three"
import { colorTemperatureKelvinToRgb } from "../util/astronomyUtil";

const StarSystemsScene = ({ starSystems }) => {
  const meshes = []
  starSystems.forEach(system => {
    const radius = system.stars[0] !== undefined ? system.stars[0].radius ?? 1 : 1
    const geometry = new THREE.SphereGeometry( radius, 32, 32 )

    const color = system.stars[0] !== undefined ? colorTemperatureKelvinToRgb(system.stars[0].temperature, true) : 0x777777
    const material = new THREE.MeshBasicMaterial( {
      color: color
    })
    const mesh = new THREE.Mesh( geometry, material )
    mesh.position.set(system.x, system.y, system.z)



    const group = new THREE.Group()
    group.add(mesh);
    
    meshes.push(group)
  });

  return {
    meshes: meshes
  }
}

export default StarSystemsScene