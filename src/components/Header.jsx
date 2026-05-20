import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/contact'
import { useI18n } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const NAV_KEYS = [
  { to: '/', key: 'nav.home', end: true },
  { to: '/about', key: 'nav.about' },
  { to: '/services', key: 'nav.services' },
  { to: '/packages', key: 'nav.packages' },
  { to: '/team', key: 'nav.team' },
  { to: '/contact', key: 'nav.contact' },
]

function Header() {
  const { t } = useI18n()
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

  return (
    <header className="site-header">
      <div className="topbar-mobile d-lg-none">
        <a href={`tel:${PHONE_TEL}`} className="topbar-mobile-link">
          <i className="fa fa-phone-alt me-1" />
          {PHONE_DISPLAY}
        </a>
      </div>

      <div className="container-fluid bg-dark px-4 px-lg-5 d-none d-lg-block topbar-desktop">
        <div
          className="d-flex align-items-center justify-content-between flex-wrap"
          style={{ minHeight: 45 }}
        >
          <div className="d-flex align-items-center flex-wrap">
            <small className="me-3 text-light">
              <i className="fa fa-map-marker-alt me-2" />
              {t('topbar.location')}
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
          <LanguageSwitcher variant="dark" />
        </div>
      </div>

      <div className="container-fluid position-relative p-0 navbar-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light px-3 px-lg-5 py-2 py-lg-0">
          <Link to="/" className="navbar-brand p-0" onClick={() => setMenuOpen(false)}>
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

          <div className="d-flex align-items-center gap-2 ms-auto d-lg-none">
            <LanguageSwitcher variant="light" />
            <button
              className={`navbar-toggler border-0 shadow-none ${menuOpen ? '' : 'collapsed'}`}
              type="button"
              aria-controls="navbarCollapse"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="navbar-toggler-icon-custom">
                <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
              </span>
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            id="navbarCollapse"
          >
            <div className="navbar-nav ms-lg-auto py-2 py-lg-0">
              {NAV_KEYS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-item nav-link${isActive ? ' active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {t(item.key)}
                </NavLink>
              ))}
            </div>
            <div className="navbar-actions pt-2 pt-lg-0 pb-3 pb-lg-0 d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2">
              <LanguageSwitcher variant="light" className="d-none d-lg-flex" />
              <Link
                to="/#reservas"
                className="btn btn-primary rounded-pill w-100 w-lg-auto py-2 px-4"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav.book')}
              </Link>
            </div>
          </div>
        </nav>

        {menuOpen && (
          <button
            type="button"
            className="navbar-backdrop d-lg-none"
            aria-label={t('nav.closeMenu')}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </header>
  )
}

export default Header
