import React from 'react'

/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"

const OrbitVisualization = ({star}) => {
  const [ colorMode ] = useColorMode()
  const scale = 99 / Math.max(...star.planets.map(p => p.orbit.semiMajorAxis))
  const innerHabRadius = star.luminosity ? Math.sqrt(star.luminosity) * 0.95 : null
  const outerHabRadius = star.luminosity ? Math.sqrt(star.luminosity) * 1.37 : null

  return (
    <svg
      width="200px"
      height="200px"
      viewBox="0 0 200 200"
    >
      {outerHabRadius ?
        <circle 
          stroke="stroke"
          fill="green"
          cx="100"
          cy="100"
          r={outerHabRadius * scale}
        />
      : ``}
      {innerHabRadius ?
        <circle
          stroke="stroke"
          fill={colorMode === `default` ? `#fff` : `#000`}
          cx="100"
          cy="100"
          r={innerHabRadius * scale}
        />
      : ``}
      {star.planets.map(planet => (
        <circle
          key={planet.id} 
          stroke="black"
          fill="none"
          cx="100"
          cy="100"
          r={planet.orbit.semiMajorAxis * scale}
        />
      ))}
      {star.planets.map(planet => (
        <circle
          key={planet.id} 
          stroke="black"
          fill="none"
          cx="100"
          cy="100"
          r={planet.orbit.semiMajorAxis * scale}
        />
      ))}
    </svg>
  )
}

export default OrbitVisualization
