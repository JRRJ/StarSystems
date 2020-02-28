import React from "react"
import Layout from "./layout"
import Star from "./star"

// @jsx jsx
import { jsx } from 'theme-ui'

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.name}</h1>
    <div>
      <em>RA: {pageContext.rightAscension.toFixed(3)}</em> <em>DEC: {pageContext.declination.toFixed(3)}</em>
    </div>
    <div sx={{
      borderBottom: `5px solid #777`
    }}>
      <strong>Distance to Earth:</strong><span> {pageContext.distance.toFixed(2)} LY</span>
    </div>
    {pageContext.stars.map(star =>
      <Star key={star.starId} star={star}></Star>
    )}
  </Layout>
)