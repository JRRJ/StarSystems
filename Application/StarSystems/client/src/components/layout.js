import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useColorMode } from 'theme-ui'

import Header from "./header"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Layout = ({ children }) => {

  const [colorMode, setColorMode] = useColorMode()
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
          maxWidth: 900,
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
                display: `inline`,
                fontSize: 3
              },
            }}
          >
            <li><Link to="/stars-in-15-ly/">All Star Systems - 15ly</Link></li>
            <li><Link to="/planets-in-50-ly/">Stars With Planets - 50ly</Link></li>
            <li><Link to="/search">Search Systems</Link></li>
            <li>
              <span
                onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')}}
                sx={{
                  border: `3px solid #777`,
                  borderRadius: 2,
                  padding: 1,
                  cursor: `pointer`
                }}
              >
                {colorMode === 'default' ? 'Light Theme' : 'Dark Theme'}
              </span>
            </li>
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