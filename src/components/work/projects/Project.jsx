import React, { useState } from 'react'
import { ProjectStyleDiv } from './ProjectStyle'
import { project_details } from '../../../common/constants/WorkConstants'
import linkImg from '../../../common/assets/link.png'

const Project = () => {

  const [selectedProject, setSelectedProject] = useState(0)

  return (
    <ProjectStyleDiv>
      <h2>{ project_details.title }</h2>

      <section className="container">
        <div className="project-list">
          {
            project_details.project_data.map((project, indx) => (
              <div onClick={() => setSelectedProject(indx)} className={`project-tab ${selectedProject === indx && 'active-tab'}`}  key={indx}>
                <h3>{ project.name }</h3>
                { selectedProject === indx && <a href={project.metalink} target='_blank'>visit site <img src={linkImg} alt="linkimg" /></a>} 
              </div>
            ))
          } 
        </div>
        <div className="project-thumbnail">
            <img src={project_details.project_data[selectedProject].thumbnail.desktop} alt="desktopProjectView" className="desktop" />
            <img src={project_details.project_data[selectedProject].thumbnail.tablet} alt="tabletProjectView" className="tablet" />
        </div>
      </section> 
    </ProjectStyleDiv>
  )
}

export default Project