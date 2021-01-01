import React, { useState } from 'react'
import projectData from '../../content/projectData'
import Layout from '../components/layout'
import Project from '../components/Project'

const MoreInfoModal = () => {
	return (
		<h1>More info</h1>
	)
}

const Portfolio = ({ location }) => {

    const [projects, setProjects] = useState(projectData)
    const [moreInfoModalOpen, setMoreInfoModalOpen] = useState(false)

    return (
        <div className='project-list-container'>
            {moreInfoModalOpen && <MoreInfoModal />}
            <div className='project-list'>
                {
                    projects.map(project => {
                        const { id, description, title, github, imgURL, website } = project

                        return  (
                            <div onClick={() => setMoreInfoModalOpen(!moreInfoModalOpen)}>
                                <Project
                                    key={id}
                                    description={description}
                                    title={title}
                                    github={github}
                                    imgURL={imgURL}
                                    website={website}
                                />
                            </div>
                        )

                        
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio
// {projects.map((project) => {
//     const { description, title, id, imgURL, github, website } = project;



//     return (
//         <div>
//             <div >

//             </div>
//         </div>
//     );
// })}