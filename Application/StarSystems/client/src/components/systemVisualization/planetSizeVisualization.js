import React from 'react'

/** @jsx jsx */
import { jsx } from "theme-ui"

import PlanetSizeVisualizationPlanet from "./planetSizeVisualizationPlanet"
import { colorTemperatureKelvinToRgb } from "../../util/astronomyUtil";

const PlanetSizeVisualization = ({star}) => {
  const scalingFactor = 8
  const earthRadiusTosolarRadius = 109

  const solarRadius = star.radius ? star.radius * scalingFactor * earthRadiusTosolarRadius : null
  const { red, green, blue } = colorTemperatureKelvinToRgb(star.temperature)
  const starColor = `rgb(${red},${green},${blue})`

  const planetColorForTemperature = (temperature) => {
    const red = Math.floor(Math.min(255, Math.max(temperature - 300, 0)))
    const blue = Math.floor(Math.max(255 - temperature, 0))
    const green = Math.floor(Math.max(0, 255 - 2 * Math.abs(300 - temperature)))
    return `rgb(${red},${green},${blue})`
  }

  let currentPosition = 60;
  const planetVisualizationData = star.planets.map(planet => {
    currentPosition += scalingFactor * planet.radius
    const planetPosition = currentPosition
    currentPosition += scalingFactor * planet.radius + scalingFactor
    return {
      id: planet.id,
      size: scalingFactor * planet.radius,
      xPosition: planetPosition,
      color: planet.temperature ? planetColorForTemperature(planet.temperature) : `#777`,
      name: planet.planetName
    }
  })

  return (
    <svg 
      width="900px" 
      height="200px"
      viewBox="0 0 900 200"
      sx = {{
        border: `1px solid #777`
      }}
    >
      {solarRadius ?
        (<circle
          cx={-solarRadius + 50}
          cy={100}
          r={solarRadius}
          fill={starColor}
        ></circle>) : ``}
      {planetVisualizationData.map(planet => (
        <PlanetSizeVisualizationPlanet
          key={planet.id}
          size={planet.size}
          xPosition={planet.xPosition}
          color={planet.color}
          name={planet.name}
        />
      ))}
    </svg>
  )
}

export default PlanetSizeVisualization
