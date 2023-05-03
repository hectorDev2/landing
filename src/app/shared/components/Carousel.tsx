'use client'
import React from 'react'

import { UncontrolledCarousel } from 'reactstrap'

export const Carousel = () => {
  return (
    <UncontrolledCarousel
      style={{
        width: '300px',
        margin: '0 auto'
      }}
      items={[
        {
          altText: 'Project Ilumination CRP',
          caption: 'Slide 1',
          key: 1,
          src: 'https://picsum.photos/id/967/1200/600.jpg'
        },
        {
          altText: 'Labor Social',
          caption: 'project to innovation',
          key: 2,
          src: 'https://picsum.photos/id/456/1200/600'
        },
        {
          altText: 'Slide 3',
          caption: 'Slide 3',
          key: 3,
          src: 'https://picsum.photos/id/8/1200/600'
        }
      ]}
    />
  )
}
