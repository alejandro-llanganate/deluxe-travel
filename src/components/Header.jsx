import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/contact'

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/about', label: 'Sobre nosotros' },
  { to: '/services', label: 'Servicios' },
  { to: '/packages', label: 'Paquetes' },
  { to: '/team', label: 'Equipo' },
  { to: '/contact', label: 'Contacto' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function toggleMenu() {
    setMenuOpen((open) => !open)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="topbar-mobile d-lg-none">
        <a href={`tel:${PHONE_TEL}`} className="topbar-mobile-link">
          <i className="fa fa-phone-alt me-1" />
          {PHONE_DISPLAY}
        </a>
      </div>

      <div className="container-fluid bg-dark px-4 px-lg-5 d-none d-lg-block topbar-desktop">
        <div className="d-flex align-items-center flex-wrap" style={{ minHeight: 45 }}>
          <small className="me-3 text-light">
            <i className="fa fa-map-marker-alt me-2" />
            Quito, Ecuador
          </small>
          <small className="me-3 text-light">
            <i className="fa fa-phone-alt me-2" />
            <a href={`tel:${PHONE_TEL}`} className="text-light text-decoration-none">
              {PHONE_DISPLAY}
            </a>
          </small>
          <small className="text-light">
            <i className="fa fa-envelope-open me-2" />
            contacto@deluxetravel.ec
          </small>
        </div>
      </div>

      <div className="container-fluid position-relative p-0 navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light px-3 px-lg-5 py-2 py-lg-0">
          <Link to="/" className="navbar-brand p-0" onClick={closeMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/logo_darkmode.png`}
              alt="Deluxe Travel Ecuador"
              className="logo-dark"
            />
            <img
              src={`${process.env.PUBLIC_URL}/logo_whitemode.png`}
              alt="Deluxe Travel Ecuador"
              className="logo-light"
            />
          </Link>

          <button
            className={`navbar-toggler border-0 shadow-none ${menuOpen ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarCollapse"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon-custom">
              <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-lg-auto py-2 py-lg-0">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-item nav-link${isActive ? ' active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="navbar-actions pt-2 pt-lg-0 pb-3 pb-lg-0">
              <Link
                to="/#reservas"
                className="btn btn-primary rounded-pill w-100 w-lg-auto py-2 px-4"
                onClick={closeMenu}
              >
                Reservar
              </Link>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <button
            type="button"
            className="navbar-backdrop d-lg-none"
            aria-label="Cerrar menú"
            onClick={closeMenu}
          />
        )}
      </div>
    </header>
  )
}

export default Header
