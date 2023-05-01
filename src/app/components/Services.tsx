import Image from 'next/image'
import React from 'react'
import ImageService from '../../../public/service.png'
import Card from '../shared/components/Card'
import style from './styles.module.css'
export const Services = () => {
  return (
    <div className={`container d-flex gap-4 flex-wrap justify-content-center`}>
      <Card
        content={
          'El desarrollo web es como construir una casa digital, donde cada línea de código es un ladrillo y cada diseño es una capa de pintura que da vida a la estructura virtual.'
        }
        title={'Desarrollo Web'}
        buttonWarning={'Ver más'}
        className={style.cardServices}
      />
      <Image src={ImageService} width={300} height={300} alt={''}></Image>
    </div>
  )
}
