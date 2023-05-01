import React from 'react'
import { projects } from '../../constants'
import { CardProject } from './CardProject'
import style from './style.module.css'
export const Projects = () => {
  return (
    <div className='container'>
      <h2>projects</h2>
      <div className={style.gridProjects}>
        {projects.map(project => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
