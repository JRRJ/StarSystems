import React from "react"
import Layout from "./layout"
import Star from "./star"

/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.name}</h1>
    <strong>Distance to Earth</strong><span>{pageContext.distance}</span>
      <div sx={{
        height: 300,
        border: `1px solid black`,
        textAlign: `center`,
        padding: 120
      }}>
        System Diagrams Go Here...
      </div>
      {pageContext.stars.map(star =>
        <Star key={star.starId} star={star}></Star>
      )}
  </Layout>
)