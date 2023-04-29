'use client'
import Image from 'next/image'
import React from 'react'
import style from './style.module.css'

export const ImageHero = () => {
  return (
    <Image
      src={
        'https://artlogic-res.cloudinary.com/w_1200,h_630,c_fill,f_auto,fl_lossy,q_auto/artlogicstorage/jackbell/images/view/18ff63c263f76b607a2247385be457ffj/jackbellgallery-jean-david-nkot-www-boozalleur-des-lieux.cm.org-2021.jpg'
      }
      alt={'banner'}
      className={style.imageHero}
      width={320}
      height={320}
    />
  )
}
