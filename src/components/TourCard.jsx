import React from 'react'
import { Link } from 'react-router-dom'
import { getWhatsAppLink } from '../data/tours'

export default function TourCard({ tour, delay = '0.1s' }) {
  return (
    <div
      className="col-lg-4 col-md-6 wow fadeInUp"
      data-wow-delay={delay}
    >
      <div className="package-item h-100">
        <div className="overflow-hidden">
          <img
            className="img-fluid w-100"
            src={tour.image}
            alt={tour.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            style={{ height: 220, objectFit: 'cover' }}
          />
        </div>
        <div className="d-flex border-bottom">
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-map-marker-alt text-primary me-2" />
            {tour.region}
          </small>
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-calendar-alt text-primary me-2" />
            {tour.durationShort}
          </small>
          <small className="flex-fill text-center py-2">
            <i className="fa fa-check text-primary me-2" />
            {tour.included ? 'Incluido' : 'Consultar'}
          </small>
        </div>
        <div className="text-center p-4 d-flex flex-column flex-grow-1">
          <h4 className="mb-1">{tour.title}</h4>
          <p className="text-muted small mb-2">{tour.subtitle}</p>
          <h3 className="mb-0 text-primary">${tour.price} USD</h3>
          <p className="small text-muted mb-3">por persona</p>
          <p className="flex-grow-1">{tour.description.slice(0, 100)}…</p>
          <div className="d-flex justify-content-center mb-2">
            <Link
              to={`/tours/${tour.slug}`}
              className="btn btn-sm btn-primary px-3 border-end"
              style={{ borderRadius: '30px 0 0 30px' }}
            >
              Ver más
            </Link>
            <a
              href={getWhatsAppLink(tour)}
              className="btn btn-sm btn-primary px-3"
              style={{ borderRadius: '0 30px 30px 0' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
