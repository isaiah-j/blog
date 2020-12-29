import React, {useState} from 'react'
import projectData from '../../content/projectData'
import Layout from '../components/layout'
import Project from '../components/Project'

const Portfolio = ({location}) => {

    const [projects, setProjects] = useState(projectData)

    return (
        <Layout location={location}>
            <div className='project-list-container'>
                <div className='project-list'>
                    {
                        projects.map(project => {
                            const {id, description, title, github, imgURL, website} = project

                        return  <Project
                            key={id}
                            description={description}
                            title={title}
                            github={github}
                            imgURL={imgURL}
                            website={website}
                        />
                        })
                    }
                </div>
            </div>
        </Layout>
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