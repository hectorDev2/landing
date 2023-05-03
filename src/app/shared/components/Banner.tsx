import Image, { StaticImageData } from 'next/image'
import React from 'react'
import style from '../../styles/Shared.module.css'

interface BannerInterface {
  routeImage?: string | StaticImageData
  title?: string
  subtitle?: string
}

export const Banner = ({ routeImage, title, subtitle }: BannerInterface) => (
  <div className={`${style.banner}`}>
    <div className={`${style.contain}`}>
      {title && <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
    <Image
      src={routeImage ? routeImage : ''}
      width={300}
      height={250}
      alt={`image banner of ${routeImage}`}
    />
  </div>
)
