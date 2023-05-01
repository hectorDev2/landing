import React from 'react'
import { CardHero } from './CardHero'
import { ImageHero } from './ImageHero'

export const Hero = () => {
  return (
    <div className={`container gap-2 d-flex justify-content-between flex-wrap`}>
      <CardHero />
      <ImageHero />
    </div>
  )
}
