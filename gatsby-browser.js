
import React, {useState} from 'react'
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
import "./src/style.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import Layout from './src/components/layout'

export const wrapPageElement = ({location,element, props}) => {
  return <Layout location={location} {...props}>{element}</Layout>
}


