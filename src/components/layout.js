import React, {useState, useEffect} from "react"
import axios from "axios"
import NavBar from './nav'
import Particles from './particles'
import TopNav from '../components/topNav'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const blogPath = `${__PATH_PREFIX__}/blog`
  const isBlogPath = location.pathname === blogPath
  const isRootPath = location.pathname === rootPath
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
      <div className={isRootPath ? '': ''} >
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
