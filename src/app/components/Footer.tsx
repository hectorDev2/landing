import React from 'react'
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa'
import logo from '../../../public/logo.png'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='text-center text-lg-start bg-light text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a
            href='https://www.facebook.com'
            target='_blank'
            className='me-4 text-reset'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            className='me-4 text-reset'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
          <a
            href='https://www.google.com'
            target='_blank'
            className='me-4 text-reset'
            rel='noopener noreferrer'
          >
            <FaGoogle />
          </a>
          <a
            href='https://www.instagram.com'
            target='_blank'
            className='me-4 text-reset'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
          <a
            href='https://www.linkedin.com'
            className='me-4 text-reset'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://www.github.com'
            className='me-4 text-reset'
            rel='noopener noreferrer'
          >
            {' '}
            <FaGithub />
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                CM organize
                <Image src={logo} width={75} height={75} alt={''} />
              </h6>

              <p>
                Como organización sin fines de lucro, nuestro objetivo principal
                es servir a la comunidad y trabajar para un bien común en lugar
                de obtener ganancias.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className='text-center p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2023 Develop by:
        <a
          className='text-reset fw-bold'
          href='https://hector-dev-phi.vercel.app/'
        >
          Hector Developer
        </a>
      </div>
    </footer>
  )
}
