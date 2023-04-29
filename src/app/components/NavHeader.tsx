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

export const NavHeader = (args: ParseArgsConfig) => {
  const [isOpen, setIsOpen] = useState(false)

  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Navbar
      className={`container sticky-top navbar-expand-lg navbar-expand-md`}
      {...args}
    >
      <NavbarBrand href='/'>
        <Image src={logo} width={75} height={75} alt={''} />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='me-auto' navbar>
          {navLinks.map(route => (
            <NavItem key={route.id}>
              <NavLink onClick={() => setActive(route.title)}>
                {route.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
      <NavbarText className={`d-none d-md-block`}>
        <button className={`${style.buttonContact}`}>contacto</button>
      </NavbarText>
    </Navbar>
  )
}
