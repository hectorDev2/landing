import React from 'react'
import { FiMail } from 'react-icons/fi'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare
} from 'react-icons/fa'

import { AiTwotonePhone } from 'react-icons/ai'

import style from './styles.module.css'

export const TopPage = () => {
  return (
    <div
      className={`${style.containerTop} d-flex justify-content-around  align-items-center`}
    >
      <div className='d-flex align-items-center'>
        <AiTwotonePhone className={`${style.icon}`} />
        <p className={`${style.phone}`}>+51 943934343</p>
      </div>
      <div className=''>
        <FiMail className={`${style.icon}`} />
        <a>mc@mailto.org</a>
      </div>
      <div className=''>
        <a className={`${style.link}`} href='https://www.facebook.com/'>
          <FaFacebookSquare />
        </a>
        <a className={`${style.link}`} href='https://www.instagram.com/'>
          <FaInstagramSquare />
        </a>
        <a className={`${style.link}`} href='https://www.whatsapp.com/'>
          <FaWhatsappSquare />
        </a>
      </div>
    </div>
  )
}
