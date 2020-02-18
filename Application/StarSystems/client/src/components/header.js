import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">
        <h1 sx={{ 
          textAlign: `center`,
          fontSize: 7 
        }}>
          {siteTitle}
        </h1>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
