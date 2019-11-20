import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from './logo';
import Nav from './nav';

const Header = () => (
  <div className="flex items-center bg-white text-gray-700 shadow-lg mb-1">
    <div className="flex items-center container mx-auto py-2 px-6">
      <Logo />
      <Nav />

    </div>
  </div>
)

export default Header
