import React from 'react'
import { CardHero } from './hero/CardHero'
import { ImageHero } from './hero/ImageHero'

export const Hero = () => {
  return (
    <div className={`container gap-2 d-flex justify-content-between flex-wrap`}>
      <CardHero />
      <ImageHero />
    </div>
  )
}
