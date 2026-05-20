import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import {
  getTourBySlug,
  getWhatsAppLink,
  WHATSAPP_DISPLAY,
} from '../data/tours'
import { getDepositAmount } from '../data/contact'

export default function TourDetail() {
  const { slug } = useParams()
  const tour = getTourBySlug(slug)

  if (!tour) {
    return <Navigate to="/packages" replace />
  }

  const waLink = getWhatsAppLink(tour)
  const deposit50 = getDepositAmount(tour.price)

  return (
    <div>
      <PageHero
        title={tour.title}
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Paquetes', to: '/packages' },
          { label: tour.title },
        ]}
      />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img
                src={tour.image}
                alt={tour.title}
                className="img-fluid rounded w-100 shadow-sm mb-3"
                style={{ maxHeight: 420, objectFit: 'cover' }}
                referrerPolicy="no-referrer"
              />
              {tour.gallery?.length > 0 && (
                <div className="row g-2">
                  {tour.gallery.map((src) => (
                    <div key={src} className="col-4">
                      <img
                        src={src}
                        alt=""
                        className="img-fluid rounded w-100"
                        style={{ height: 100, objectFit: 'cover' }}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                {tour.subtitle}
              </h6>
              <h1 className="mb-3">{tour.title}</h1>
              <p className="mb-4">{tour.description}</p>

              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <i className="fa fa-calendar-alt text-primary me-2" />
                    <strong>Duración</strong>
                    <p className="mb-0 mt-1">{tour.duration}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <i className="fa fa-bus text-primary me-2" />
                    <strong>Salida</strong>
                    <p className="mb-0 mt-1">Desde {tour.departure}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100 bg-primary text-white">
                    <i className="fa fa-tag me-2" />
                    <strong>Precio</strong>
                    <p className="mb-0 mt-1 fs-4 fw-bold">
                      ${tour.price} {tour.currency}
                      <small className="d-block fs-6 fw-normal">por persona</small>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <i className="fa fa-wallet text-primary me-2" />
                    <strong>Reserva (50%)</strong>
                    <p className="mb-0 mt-1">
                      Anticipo de ${deposit50} USD (50% del paquete) para
                      asegurar tu cupo
                    </p>
                  </div>
                </div>
              </div>

              {tour.included && (
                <span className="badge bg-primary mb-3 me-2">Todo incluido</span>
              )}
              {tour.extra && (
                <span className="badge bg-secondary mb-3">{tour.extra}</span>
              )}

              {tour.stops && (
                <div className="mb-4">
                  <strong className="d-block mb-2">Destinos del recorrido:</strong>
                  <div className="d-flex flex-wrap gap-2">
                    {tour.stops.map((stop) => (
                      <span key={stop} className="badge border text-dark">
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="d-flex flex-wrap gap-2">
                <a
                  href={waLink}
                  className="btn btn-success rounded-pill py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp me-2" />
                  Reservar — {WHATSAPP_DISPLAY}
                </a>
                <Link
                  to="/#reservas"
                  className="btn btn-outline-primary rounded-pill py-3 px-4"
                >
                  Formulario de reserva
                </Link>
              </div>

              <p className="small text-muted mt-3 mb-0">
                Paga el 50% para confirmar y el saldo antes o durante el viaje.
                Aceptamos tarjeta, transferencia o efectivo.
              </p>
            </div>
          </div>

          {tour.packageIncludes?.length > 0 && (
            <div className="row g-5 mt-2">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-4">Qué incluye el paquete</h3>
                <ul className="list-unstyled tour-includes-list">
                  {tour.packageIncludes.map((item) => (
                    <li key={item} className="mb-2">
                      <i className="fa fa-check text-primary me-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {tour.notIncluded?.length > 0 && (
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                  <h3 className="mb-4">No incluye</h3>
                  <ul className="list-unstyled text-muted">
                    {tour.notIncluded.map((item) => (
                      <li key={item} className="mb-2">
                        <i className="fa fa-times me-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="row g-5 mt-2">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="mb-4">Lo más destacado</h3>
              <ul className="list-unstyled">
                {tour.highlights.map((item) => (
                  <li key={item} className="mb-2">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h3 className="mb-4">Itinerario</h3>
              <ul className="list-unstyled">
                {tour.itinerary.map((step, i) => (
                  <li key={step} className="mb-2 d-flex">
                    <span
                      className="btn btn-sm btn-primary rounded-circle me-3 flex-shrink-0"
                      style={{
                        width: 32,
                        height: 32,
                        padding: 0,
                        lineHeight: '32px',
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
