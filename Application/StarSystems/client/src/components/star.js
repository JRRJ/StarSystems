import React from "react"
import Planet from "./planet"

// @jsx jsx
import { jsx } from 'theme-ui'

import SystemVisualization from "./systemVisualization/systemVisualization"

const Star = ({ star }) => (
  <div>
    <h2>
      {star.starName}
    </h2>
    {star.planets.length > 0 ? <SystemVisualization star={ star } /> : ``}
    <div
      sx = {{
        display: `grid`,
        gridTemplateColumns: `auto 1fr`,
        gridAutoRows: `1.75rem`,
        gridGap: `0 20px`,
        borderBottom: `3px solid #777`
      }}
    >
      <strong>Spectral Classification:</strong>
      <span>{star.spectralType}</span>

      <strong>Absolute Magnitude:</strong>
      <span>{star.absoluteMagnitude ? star.absoluteMagnitude.toFixed(3) : `0.000`}</span>

      <strong>Mass:</strong>
      <span>{star.mass ? star.mass.toFixed(3) : ``} M<sub>Sun</sub></span>

      <strong>Radius:</strong>
      <span>{star.radius ? star.radius.toFixed(3) : ``} R<sub>Sun</sub></span>

      <strong>Luminosity:</strong>
      <span>{star.luminosity ? star.luminosity.toFixed(3) : ``} L<sub>Sun</sub></span>

      <strong>Temperature:</strong>
      <span>{star.temperature} K</span>

      <strong>Year Discovered:</strong>
      <span>{star.discoveryYear}</span>
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