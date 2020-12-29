import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Index = ({ location }) => {

  return (
      <Layout location={location}>
        <h1>
            <Link to='/blog'>Gatsby</Link>
        </h1>
      </Layout>
  )
}

export default Index

