import React from "react"
import Planet from "./planet"

// @jsx jsx
import { jsx } from 'theme-ui'

const Star = ({ star }) => (
  <div>
    <h2>
      {star.starName}
    </h2>
    <div
      sx = {{
        display: `grid`,
        gridTemplateColumns: `auto 1fr`,
        gridAutoRows: `1.75rem`,
        gridGap: `0 20px`
      }}
    >
      <strong>Spectral Classification:</strong>
      <span>{star.spectralType}</span>

      <strong>Absolute Magnitude:</strong>
      <span>{star.absoluteMagnitude ? star.absoluteMagnitude.toFixed(3) : `0.000`}</span>

      <strong>Mass:</strong>
      <span>{star.mass ? star.mass.toFixed(3) : `?`} M<sub>Sun</sub></span>

      <strong>Luminosity:</strong>
      <span>{star.luminosity ? star.luminosity.toFixed(3) : ``} L<sub>Sun</sub></span>

      <strong>Temperature:</strong>
      <span>{star.temperature} K</span>
    </div>
    <div
      sx={{
        marginLeft: 20
      }}
    >
      {star.planets
        .sort((a, b) => a.orbit.semiMajorAxis < b.orbit.semiMajorAxis ? -1 : 1)
        .map(planet =>
        <Planet key={planet.id} planet={planet}></Planet>
      )}
    </div>
  </div>
)

export default Star