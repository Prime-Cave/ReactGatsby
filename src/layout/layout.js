import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Menu from './Menu'

const Layout = ({ children }) => {

  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
