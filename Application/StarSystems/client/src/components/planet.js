import React from "react"

// @jsx jsx
import { jsx } from 'theme-ui'
import { estimateMassFromRadius, estimateRadiusFromMass } from "../util/astroUtil"

const Planet = ({ planet }) => (
  <div>
    <h3>{planet.planetName}</h3>
    <div
      sx = {{
        display: `grid`,
        gridTemplateColumns: `auto 1fr`,
        gridAutoRows: `1.75rem`,
        gridGap: `0 20px`
      }}
    >
      <strong>Mass:</strong>
      {planet.mass ? (
        <span>{planet.mass.toFixed(2)} M<sub>E</sub></span>
      ) : (
        <span>{estimateMassFromRadius(planet.radius).toFixed(2)} M<sub>E</sub> (estimated)</span>
      )}

      <strong>Radius:</strong>
      {planet.radius ? (
        <span>{planet.radius.toFixed(2)} R<sub>E</sub></span>
      ) : (
        <span>{estimateRadiusFromMass(planet.mass).toFixed(2)} R<sub>E</sub> (estimated)</span>
      )}

      <strong>Temperature:</strong>
      <span>{planet.temperature} K</span>

      <strong>Length of Year:</strong>
      <span>{planet.orbit.period.toFixed(2)} Earth Days</span>

      <strong>Distance From Star:</strong>
      <span>{planet.orbit.semiMajorAxis.toFixed(3)} AU</span>      

      <strong>Discovery Method:</strong>
      <span>{planet.discoveryMethod}</span>
    </div>
  </div>
)

export default Planet