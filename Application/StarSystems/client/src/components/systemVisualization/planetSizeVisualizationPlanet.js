import React from 'react'

/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from 'gatsby'

const PlanetSizeVisualizationPlanet = ({ size, xPosition, color, name }) => {
    
  return (
    <g>
      <a href={`#${name}`}><circle cx={xPosition} cy={100} r={size} fill={color} /></a>
    </g>
  )
}

export default PlanetSizeVisualizationPlanet
