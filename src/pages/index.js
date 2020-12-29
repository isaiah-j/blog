import React from "react"
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Index = ({ location }) => {

  return (
      <Layout location={location}>
          <div className="header-container">
			    <div id='middle' >
					<h1 >
						Isaiah Fowler
					</h1>

					<h2>
						Web Developer / Designer / Penetration Tester
					</h2>
			</div>
		</div>
      </Layout>
  )
}

export default Index

