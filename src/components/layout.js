import React, {useState, useEffect} from "react"
import axios from "axios"
import NavBar from './nav'
import Particles from './particles'

const Layout = ({ location, title, children }) => {


  return (
    <div>
      <Particles />
      <NavBar></NavBar>
      <div className="global-wrapper" >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
