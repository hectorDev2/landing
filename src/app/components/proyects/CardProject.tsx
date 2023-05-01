import React from 'react'
import Image, { StaticImageData } from 'next/image'
import style from './style.module.css'
interface CardProjectInterface {
  id?: string
  title?: string
  subtitle?: string
  image?: StaticImageData
}

export const CardProject = ({ project }: { project: CardProjectInterface }) =>
  project ? (
    <div className={` ${style.containerCard}`}>
      <div className={style.contain}>
        <h2>{project.title}</h2>
        <p>{project.subtitle}</p>
      </div>
      {project.image && (
        <Image src={project?.image} width={300} height={250} alt={''} />
      )}
    </div>
  ) : null
