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
            <li><Link to="/search">Search Systems</Link></li>
            <li>
              <button
                onClick={e => {setColorMode(colorMode === 'default' ? 'dark' : 'default')
              }}>
                {colorMode === 'default' ? 'Light' : 'Dark'}
              </button>
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