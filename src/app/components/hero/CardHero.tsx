'use client'
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import style from './style.module.css'
export const CardHero = () => {
  return (
    <div className={`${style.containerHero}`}>
      <span className='card-hero-title'>The Digital Revolution.</span>
      <h2 className='card-hero-subtitle'>
        Providing the Trustworthy solution for the most complex business
        problems
      </h2>
      <div className='d-flex justify-content-center gap-2'>
        <button className='btn btn-warning '>explore</button>
        <button className='btn btn-light'>
          <AiFillPlayCircle />
          contact
        </button>
      </div>
    </div>
  )
}
