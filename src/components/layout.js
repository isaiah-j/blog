import React, {useState, useEffect} from "react"
import axios from "axios"
import NavBar from './nav'

const Layout = ({ location, title, children }) => {

  return (
    <div>
        <NavBar></NavBar>
      <div className="global-wrapper" >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
