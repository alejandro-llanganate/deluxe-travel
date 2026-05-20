import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

function Error() {
  return (
    <div>
      <PageHero
        title="Página no encontrada"
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: '404' },
        ]}
      />
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">No encontramos esta página</h1>
              <p className="mb-4">
                Lo sentimos, la página que buscas no existe o fue movida. Vuelve
                al inicio o explora nuestros paquetes por Ecuador.
              </p>
              <Link
                to="/"
                className="btn btn-primary rounded-pill py-3 px-5 me-2"
              >
                Ir al inicio
              </Link>
              <Link
                to="/packages"
                className="btn btn-outline-primary rounded-pill py-3 px-5"
              >
                Ver paquetes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
