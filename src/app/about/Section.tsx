import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Card from '../shared/components/Card'

interface SectionInterface {
  invert?: true
  title?: string
  subtitle?: string
  content?: string
  image?: StaticImageData | string
  buttonWarning?: string
}
export const Section = ({
  invert,
  title,
  subtitle,
  content,
  image,
  buttonWarning
}: SectionInterface) => {
  return (
    <div
      className={`${
        invert ? 'flex-row-reverse' : ''
      } container d-flex justify-content-space-between gap-3 flex-wrap my-4 align-items-center
    `}
    >
      <Card
        className='w-50'
        title={title}
        subtitle={subtitle}
        content={content}
        buttonWarning={buttonWarning}
      />
      <Image
        src={image ? image : ''}
        width={300}
        height={300}
        alt={`image illustration of ${image}`}
      />
    </div>
  )
}
