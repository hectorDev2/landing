'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap'
import style from '../styles/NavHeader.module.css'
import { ParseArgsConfig } from 'util'

import logo from '../../../public/logo.png'
import { navLinks } from '../constants'
import Link from 'next/link'

export const NavHeader = (args: ParseArgsConfig) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar
      className={`px-4 sticky-top navbar-expand-lg navbar-expand-md bg-light`}
      {...args}
    >
      <Link href='/'>
        <Image src={logo} width={75} height={75} alt={''} />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='me-auto' navbar>
          {navLinks.map(route => (
            <Link key={route.id} href={`/${route.id}`}>
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
