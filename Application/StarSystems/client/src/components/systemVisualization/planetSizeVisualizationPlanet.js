import React from 'react'

/** @jsx jsx */
import { jsx } from "theme-ui"

const PlanetSizeVisualizationPlanet = ({ size, xPosition, color, name }) => {
    
  return (
    <g>
      <circle cx={xPosition} cy={100} r={size} fill={color} />
    </g>
  )
}

export default PlanetSizeVisualizationPlanet
