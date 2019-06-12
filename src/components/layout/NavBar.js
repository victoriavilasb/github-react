import React from 'react';
import PropTypes from 'prop-types'

const NavBar = ( {icon, title}) => {

  return (
    <nav className="navbar bg-primary">
      <h1><i className={ icon }/> { title }</h1>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar
