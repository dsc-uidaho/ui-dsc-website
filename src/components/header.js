import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from './logo';
import Nav from './nav';

const Header = () => (
  <div className="flex items-center bg-white text-gray-700 shadow-lg py-2 px-10 mb-1">
    <Logo />
    <Nav />

  </div>
)

export default Header
