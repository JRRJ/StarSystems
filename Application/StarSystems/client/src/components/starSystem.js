import React from "react"
import Layout from "./layout"
import Star from "./star"

/** @jsx jsx */
import { jsx } from "theme-ui"
import SystemVisualization from "./systemVisualization/systemVisualization"

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.name}</h1>
    <strong>Distance to Earth:</strong><span> {pageContext.distance.toFixed(2)} LY</span>
      <SystemVisualization stars={pageContext.stars} />
      {pageContext.stars.map(star =>
        <Star key={star.starId} star={star}></Star>
      )}
  </Layout>
)