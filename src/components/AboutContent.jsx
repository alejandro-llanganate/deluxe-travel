import React from 'react'
import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, getWhatsAppUrl } from '../data/contact'
import { useI18n } from '../i18n/LanguageContext'

const FEATURED_SLUGS = ['misahualli', 'chimborazo', 'banos', 'puerto-lopez']

export default function AboutContent({ showCta = true }) {
  const { t, getTourBySlug } = useI18n()
  const featured = FEATURED_SLUGS.map(getTourBySlug).filter(Boolean)

  return (
    <div className="row g-5 align-items-center">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row g-3 about-photo-grid">
          {featured.map((tour, i) => (
            <div key={tour.slug} className={i === 0 ? 'col-12' : 'col-6'}>
              <Link
                to={`/tours/${tour.slug}`}
                className="d-block rounded overflow-hidden shadow-sm about-photo-link"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="img-fluid w-100"
                  style={{
                    height: i === 0 ? 220 : 140,
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <span className="about-photo-caption">{tour.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
        <h6 className="section-title bg-light text-start text-primary pe-3">
          {t('about.subtitle')}
        </h6>
        <h2 className="mb-4">{t('about.title')}</h2>
        <p className="text-muted mb-3">{t('about.p1')}</p>
        <p className="text-muted mb-4">{t('about.p2')}</p>
        {showCta && (
          <div className="d-flex flex-wrap gap-2">
            <Link to="/packages" className="btn btn-primary rounded-pill py-3 px-4">
              {t('about.seePackages')}
            </Link>
            <a
              href={getWhatsAppUrl(t('whatsapp.aboutTours'))}
              className="btn btn-success rounded-pill py-3 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp me-2" />
              {PHONE_DISPLAY}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
