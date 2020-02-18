import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 5`
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <nav>
          <ul
            sx={{
              display: `grid`,
              gridAutoFlow: `column`,
              li: {
                display: `inline`
              }
            }}
          >
            <li><Link to="/stars-in-10-ly/">Star Systems: 10ly</Link></li>
            <li><Link to="/planets-in-100-ly/">Planets: 100ly</Link></li>
            <li sx={{textDecoration: `line-through`}}><Link to="/">Search Systems</Link></li>
            <li><button>Light</button></li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    </>
  )
}
  
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
  
export default Layout