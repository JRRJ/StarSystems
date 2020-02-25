import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"
import OrbitVisualization from "./orbitVisualization"
import PlanetSizeVisualization from "./planetSizeVisualization"

const SystemVisualization = ({ stars }) => (
  <div sx={{
    display: "grid",
    gridTemplateColumns: "700px 200px",
    gridTemplateRows: stars.map(_ => "200px").join(" "),
    gridAutoFlow: "column",
    gridGap: 10
  }}>
    {stars.map(star =>
      <PlanetSizeVisualization key={star.starId} star={star} />
    )}
    {stars.map(star =>
      <OrbitVisualization key={star.starId} star={star} />
    )}
  </div>
)

export default SystemVisualization