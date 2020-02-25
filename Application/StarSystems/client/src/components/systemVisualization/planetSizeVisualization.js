import React from 'react'

/** @jsx jsx */
import { jsx } from "theme-ui"

import PlanetSizeVisualizationPlanet from "./planetSizeVisualizationPlanet"

const scalingFactor = 10;

const PlanetSizeVisualization = ({star}) => {
  const planetColorForTemperature = (temperature) => {
    const red = Math.floor(Math.min(255, Math.max(temperature - 300, 0)));
    const blue = Math.floor(Math.max(255 - temperature, 0));
    const green = Math.floor(Math.max(0, 255 - 2 * Math.abs(300 - temperature)));
    return `rgb(${red},${green},${blue})`;
  }

  let currentPosition = 0;
  const planetVisualizationData = star.planets.map(planet => {
    currentPosition += scalingFactor * planet.radius
    const planetPosition = currentPosition
    currentPosition += scalingFactor * planet.radius + scalingFactor
    return {
      size: scalingFactor * planet.radius,
      xPosition: planetPosition,
      color: planet.temperature ? planetColorForTemperature(planet.temperature) : `#777`
    }
  })

  return (
    <svg 
      width="700px" 
      height="200px"
      viewBox="0 0 800 200"
    >
      {planetVisualizationData.map(planet => (
        <PlanetSizeVisualizationPlanet
          key={planet.id}
          size={planet.size}
          xPosition={planet.xPosition}
          color={planet.color}
        />
      ))}
    </svg>
  )
}

export default PlanetSizeVisualization
