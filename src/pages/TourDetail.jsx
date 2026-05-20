import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useI18n } from '../i18n/LanguageContext'
import { getDepositAmount } from '../data/contact'
import { PHONE_DISPLAY } from '../data/contact'

export default function TourDetail() {
  const { slug } = useParams()
  const { t, getTourBySlug, getWhatsAppLink } = useI18n()
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
          { label: t('common.breadcrumbHome'), to: '/' },
          { label: t('common.breadcrumbPackages'), to: '/packages' },
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
                    <strong>{t('common.duration')}</strong>
                    <p className="mb-0 mt-1">{tour.duration}</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <i className="fa fa-bus text-primary me-2" />
                    <strong>{t('common.departure')}</strong>
                    <p className="mb-0 mt-1">
                      {t('common.from')} {tour.departure}
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100 bg-primary text-white">
                    <i className="fa fa-tag me-2" />
                    <strong>{t('common.price')}</strong>
                    <p className="mb-0 mt-1 fs-4 fw-bold">
                      ${tour.price} {tour.currency}
                      <small className="d-block fs-6 fw-normal">
                        {t('common.perPerson')}
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-3 h-100">
                    <i className="fa fa-wallet text-primary me-2" />
                    <strong>{t('common.reserve50')}</strong>
                    <p className="mb-0 mt-1">
                      {t('common.depositNote', { amount: deposit50 })}
                    </p>
                  </div>
                </div>
              </div>

              {tour.included && (
                <span className="badge bg-primary mb-3 me-2">
                  {t('common.allIncluded')}
                </span>
              )}
              {tour.extra && (
                <span className="badge bg-secondary mb-3">{tour.extra}</span>
              )}

              {tour.stops && (
                <div className="mb-4">
                  <strong className="d-block mb-2">{t('common.routeStops')}</strong>
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
                  {t('common.book')} — {PHONE_DISPLAY}
                </a>
                <Link
                  to="/#reservas"
                  className="btn btn-outline-primary rounded-pill py-3 px-4"
                >
                  {t('common.bookingForm')}
                </Link>
              </div>

              <p className="small text-muted mt-3 mb-0">
                {t('common.paymentNote')}
              </p>
            </div>
          </div>

          {tour.packageIncludes?.length > 0 && (
            <div className="row g-5 mt-2">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h3 className="mb-4">{t('common.packageIncludes')}</h3>
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
                  <h3 className="mb-4">{t('common.notIncludes')}</h3>
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
              <h3 className="mb-4">{t('common.highlights')}</h3>
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
              <h3 className="mb-4">{t('common.itinerary')}</h3>
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
