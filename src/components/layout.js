import React, {useState, useEffect} from "react"
import axios from "axios"
import NavBar from './nav'

const Layout = ({ location, title, children }) => {

  return (
    <div>
      <div className="global-wrapper" >
        <main>{children}</main>
      </div>
        <NavBar></NavBar>
    </div>
  )
}

export default Layout
