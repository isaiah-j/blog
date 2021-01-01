import React, {useState, useEffect} from "react"
import axios from "axios"
import NavBar from './nav'
import Particles from './particles'
import TopNav from '../components/topNav'

const pathsWithLayout = [
  '/',
  '/contact',
  '/portfolio'
]


const Layout = ({ location, title, children }) => {

  return (
    <div>
      <Particles />
      {
        pathsWithLayout.includes(location.pathname) ?
        <div>
          <TopNav />
          <NavBar />
        </div>
        :
        ''
      }
      <div  >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
