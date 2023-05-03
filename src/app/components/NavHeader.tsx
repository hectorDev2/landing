'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import style from '../styles/NavHeader.module.css'
import Link from 'next/link'
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'

import logo from '../../../public/logo.png'
import { navLinks } from '../constants'

export const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar
      variant='tabs'
      defaultActiveKey='/'
      className={`px-4 sticky-top navbar-expand-lg navbar-expand-md bg-light`}
    >
      <Link href='/'>
        <Image src={logo} width={75} height={75} alt={''} />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='me-auto' navbar>
          {navLinks.map(route => (
            <Link
              className={`${style.linkNavBar} ${
                active == route.id ? 'fw-bold' : ''
              }`}
              key={route.id}
              href={`/${route.id}`}
              onClick={() => setActive(`${route.id}`)}
            >
              <NavItem>
                <NavLink>{route.title}</NavLink>
              </NavItem>
            </Link>
          ))}
        </Nav>
      </Collapse>
      <NavbarText className={`d-none d-md-block`}>
        <button className={`${style.buttonContact}`}>contacto</button>
      </NavbarText>
    </Navbar>
  )
}
