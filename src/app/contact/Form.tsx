'use client'
import React, { useState } from 'react'
import style from '../page.module.css'
import emailjs from '@emailjs/browser'
import { Success } from '../shared/components/Success'

export const Form = () => {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: any) => {
    const { target } = e
    const { name, value } = target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'ph.barazorda@gmail.com',
          message: form.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          toggle()
          setForm({
            name: '',
            email: '',
            message: ''
          })
        },
        error => {
          setLoading(false)
          console.error(error)

          alert('Ahh, something went wrong. Please try again.')
        }
      )
  }
  return (
    <div className='container my-4'>
      <div className='row justify-content-md-center'>
        <div className='col-md-6'>
          <h2 className='mb-4 text-center'>Estamos a un Mensaje</h2>
          <form action='#' className='needs-validation' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                className='form-control'
                id='name'
                onChange={handleChange}
                value={form.name}
                required
              />
              <div className='invalid-feedback'>Please enter your name.</div>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                className='form-control'
                id='email'
                onChange={handleChange}
                value={form.email}
                required
              />
              <div className='invalid-feedback'>
                Please enter a valid email address.
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                cols={30}
                rows={10}
                className='form-control'
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className='invalid-feedback'>Please enter a message.</div>
            </div>
            <button type='submit' className={`${style.buttonSend}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Success modal={modal} toggle={toggle} />
    </div>
  )
}
