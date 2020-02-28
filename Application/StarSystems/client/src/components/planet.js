import React from "react"

// @jsx jsx
import { jsx } from 'theme-ui'

const Planet = ({ planet }) => (
  <div id={planet.planetName}>
    <h3>{planet.planetName}</h3>
    <div
      sx = {{
        display: `grid`,
        gridTemplateColumns: `auto 1fr`,
        gridAutoRows: `1.75rem`,
        gridGap: `0 20px`,
        
        borderBottom: `1px solid #777`
      }}
    >
      { planet.mass ? <strong>Mass:</strong> : ``}
      { planet.mass ? <span>{planet.mass.toFixed(2)} M<sub>E</sub></span> : ``}

      <strong>Radius:</strong>
      <span>
        {planet.radius.toFixed(2)} R<sub>E</sub>
        {planet.isRadiusPredicted ? <span> (Estimation based on mass)</span> : ``}
      </span>

      <strong>Temperature:</strong>
      <span>{planet.temperature} {planet.temperature ? `K` : ``}</span>

      <strong>Length of Year:</strong>
      <span>{planet.orbit.period.toFixed(2)} Earth Days</span>

      <strong>Distance From Star:</strong>
      <span>{planet.orbit.semiMajorAxis.toFixed(3)} AU</span>      

      <strong>Discovery Method:</strong>
      <span>{planet.discoveryMethod ? planet.discoveryMethod.split(`_`).join(` `) : ``}</span>

      <strong>Year Discovered:</strong>
      <span>{planet.discoveryYear}</span>
    </div>
  </div>
)

export default Planet