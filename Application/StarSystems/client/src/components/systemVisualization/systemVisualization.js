import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"
import OrbitVisualization from "./orbitVisualization"
import PlanetSizeVisualization from "./planetSizeVisualization"

const SystemVisualization = ({ star }) => (
  <div sx={{
    display: "grid",
    gridTemplateColumns: "900px",
    gridGap: 10,
  }}>
    <span>
      Star and Planet Sizes (Star color is actual, planet colors indicate relative warmth)
    </span>
    <PlanetSizeVisualization star={star} />
    <span>
      Planet Orbits (Green band represents habitable zone)
    </span>
    <OrbitVisualization star={star} />
  </div>
)

export default SystemVisualization