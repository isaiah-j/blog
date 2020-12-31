import React from 'react'
import { Link } from 'gatsby'

const TopNavigation = () => {
    return (
        <navbar className='top-nav-container'>
            <Link to='/blog'>Blog</Link>
            <div className='career-artifacts'>
                <a href='https://github.com/isaiah-j' target='_blank' className='artifact'>GitHub</a>
                <a className='artifact' href='https://www.linkedin.com/in/isaiah-fowler/' target='_blank'>LinkedIn</a>
                <a href='https://isaiah-j.github.io/resume/resume.pdf' target='_blank'>Resume</a>
            </div>
        </navbar>
    )
}

export default TopNavigation