'use client'
import React from 'react'
import style from './style.module.css'
import { features } from '../../constants/index'
import Card from '@/app/shared/components/Card'

export const Features = () => {
  return (
    <div className={`${style.mainFeatures} container `}>
      <h2>Features to landing Page</h2>
      <div className={`${style.features}`}>
        {features.map((feature, index) => {
          if (index == 1)
            return (
              <Card
                title='We provide truly prominent Digital solutions. '
                buttonWarning='services'
                className={`${style.feature} border-none`}
                key={feature.id}
              />
            )
          return (
            <div key={feature.id} className={`${style.feature}`}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
