import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="flex items-center bg-white text-gray-700 shadow-md mb-3">
    <div className="flex items-center container mx-auto py-4 px-6">
      <div className="uppercase text-xl font-semibold"><h1>{siteTitle}</h1></div>

    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
