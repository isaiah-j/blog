import React from 'react'
import { Link } from 'gatsby'

const TopNavigation = () => {
    return (
        <navbar className='top-nav-container'>
            <Link to='/blog'>Blog</Link>
            <div className='career-artifacts'>
                <Link>
                    <a href='../../static/resume.pdf' download>Resume</a>
                </Link>
                <div>GitHub</div>
                <div>LinkedIn</div>
            </div>
        </navbar>
    )
}

export default TopNavigation