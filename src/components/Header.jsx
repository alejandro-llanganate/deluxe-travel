import React from 'react'
import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../data/contact'

function Header() {
  return (
    <div>
    {/* Topbar Start */}
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-12 text-center text-lg-start">
          <div
            className="d-inline-flex align-items-center flex-wrap justify-content-center justify-content-lg-start"
            style={{ height: 45 }}
          >
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
      </div>
    </div>
    {/* Topbar End */}
    {/* Navbar & Hero Start */}
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link">
              Inicio
            </Link>
            <Link to="/about" className="nav-item nav-link">
              Sobre nosotros
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Servicios
            </Link>
            <Link to="/packages" className="nav-item nav-link">
              Paquetes
            </Link>
            <Link to="/team" className="nav-item nav-link">
              Equipo
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contacto
            </Link>
          </div>
          <Link to="/#reservas" className="btn btn-primary rounded-pill py-2 px-4">
            Reservar
          </Link>
        </div>
      </nav>
    </div>
    {/* Navbar & Hero End */}
    </div>
  )
}

export default Header
