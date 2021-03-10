import React, { useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import ScreenWidth from '../Utils/ScreenWidth'

import Logo from '../../images/logo.svg'

const Desktopheader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { width } = ScreenWidth()

  useEffect(() => {
    if (width > 900) {
      setMenuOpen(false)
    }
  }, [width])

  const home = () => {
    navigate('/')
  }

  const openMenu = () => {
    const Menu = document.getElementById('hamburger').classList
    Menu.toggle('open')
    if (Menu.length > 0) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <header className="nav-header">
      <img className="logo" src={Logo} alt="icon" onClick={home} />
      <nav className={menuOpen ? 'mobile-nav-open' : ''}>
        <div
          id="hamburger"
          className={menuOpen ? 'open' : ''}
          onClick={openMenu}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link
          to="/#about"
          className={
            width <= 900 && menuOpen
              ? 'animate__animated animate__fadeInDownBig'
              : ''
          }
        >
          ABOUT
        </Link>
        <Link
          to="/#projects"
          className={
            width <= 900 && menuOpen
              ? 'animate__animated animate__fadeInDownBig'
              : ''
          }
        >
          PROJECTS
        </Link>
        <Link
          to="/#writing"
          className={
            width <= 900 && menuOpen
              ? 'animate__animated animate__fadeInDownBig'
              : ''
          }
        >
          WRITING
        </Link>
        <Link
          to="/#contact"
          className={
            width <= 900 && menuOpen
              ? 'animate__animated animate__fadeInDownBig'
              : ''
          }
        >
          CONTACT
        </Link>
      </nav>
    </header>
  )
}

export default Desktopheader
