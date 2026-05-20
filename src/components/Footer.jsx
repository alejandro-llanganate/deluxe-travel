import React from 'react'
import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL, getWhatsAppUrl } from '../data/contact'
import { useI18n } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useI18n()

  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <img
                src={`${process.env.PUBLIC_URL}/logo_darkmode.png`}
                alt="Deluxe Travel Ecuador"
                className="mb-4"
                style={{ maxHeight: 70 }}
              />
              <p className="mb-4" style={{ color: '#5A6D7E' }}>
                {t('footer.tagline')}
              </p>
              <div className="d-flex flex-column gap-1">
                <Link className="btn btn-link text-start ps-0" to="/packages">
                  {t('nav.packages')}
                </Link>
                <Link className="btn btn-link text-start ps-0" to="/about">
                  {t('nav.about')}
                </Link>
                <Link className="btn btn-link text-start ps-0" to="/#reservas">
                  {t('nav.book')}
                </Link>
                <Link className="btn btn-link text-start ps-0" to="/contact">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <h4 className="text-white mb-3">{t('contact.subtitle')}</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                {t('topbar.location')}
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                <a href={`tel:${PHONE_TEL}`} className="text-light">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="mb-3">
                <i className="fab fa-whatsapp me-3" />
                <a
                  href={getWhatsAppUrl(t('whatsapp.general'))}
                  className="text-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('common.whatsapp')} {PHONE_DISPLAY}
                </a>
              </p>
              <a
                href={getWhatsAppUrl(t('whatsapp.general'))}
                className="btn btn-success rounded-pill py-2 px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2" />
                {t('contact.writeUs')}
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{' '}
                <Link className="border-bottom text-light" to="/">
                  Deluxe Travel Ecuador
                </Link>
                . {t('footer.rights')}
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to="/">{t('nav.home')}</Link>
                  <Link to="/packages">{t('nav.packages')}</Link>
                  <Link to="/contact">{t('nav.contact')}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
