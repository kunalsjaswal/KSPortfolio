import React from 'react'
import Experience from './experience/Experience'
import { WorkContainerStyle } from './WorkStyle'
import Skills from './skills/Skills'
import Project from './projects/Project'

const Work = ({experienceRef, projectRef, skillsRef}) => {

  
  return (
    <WorkContainerStyle>
      
      <div ref={experienceRef}>
        <Experience />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>
      
      <div ref={projectRef}>
        <Project />
      </div>
    </WorkContainerStyle>
  )
}

export default Work