import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"

/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
  <div sx={{
    a: {
      textDecoration: `none`
    }
  }}>
    <Header />
    <br></br>
    <h2><Link to="/stars-in-15-ly/">Explore a Visualization of All Star Systems within 15 Light Years</Link></h2>
    <h2><Link to="/planets-in-50-ly/">Explore a Visualization of Star Systems With Planets within 50 Light Years</Link></h2>
    <h2><Link to="/search">Search for a Specific Star or Star System</Link></h2>
  </div>
  </Layout>
)

export default IndexPage
