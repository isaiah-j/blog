import React, {useState, useEffect} from "react"
import axios from "axios"
import NavBar from './nav'
import Particles from './particles'
import TopNav from '../components/topNav'

const Layout = ({ location, title, children }) => {
  const blogPath = `${__PATH_PREFIX__}/blog`
  const isBlogPath = location.pathname === blogPath

  return (
    <div>
      <Particles />
      {
        isBlogPath ?
        ''
        :
        <div>
          <TopNav />
          <NavBar />
        </div>
      }
      <div className="global-wrapper" >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
