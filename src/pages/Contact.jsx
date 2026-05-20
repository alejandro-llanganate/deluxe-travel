import React, { useState } from 'react'
import PageHero from '../components/PageHero'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  getWhatsAppUrl,
} from '../data/contact'
import { useI18n } from '../i18n/LanguageContext'

function Contact() {
  const { t } = useI18n()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const text = [
      t('whatsapp.contactFormHello'),
      '',
      name ? `${t('whatsapp.fieldName')}: ${name}` : null,
      email ? `${t('whatsapp.fieldEmail')}: ${email}` : null,
      subject ? `${t('whatsapp.fieldSubject')}: ${subject}` : null,
      message ? `${t('whatsapp.fieldMessage')}: ${message}` : null,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
  }

  const waGeneral = getWhatsAppUrl(t('whatsapp.general'))

  return (
    <div>
      <PageHero
        title={t('contact.pageTitle')}
        breadcrumbs={[
          { label: t('common.breadcrumbHome'), to: '/' },
          { label: t('contact.pageTitle') },
        ]}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              {t('contact.subtitle')}
            </h6>
            <h1 className="mb-5">{t('contact.title')}</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>{t('contact.subtitle')}</h5>
              <p className="mb-4">{t('contact.intro')}</p>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">{t('contact.office')}</h5>
                  <p className="mb-0">{t('topbar.location')}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">{t('contact.phoneLabel')}</h5>
                  <p className="mb-0">
                    <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                  </p>
                </div>
              </div>
              <a
                href={waGeneral}
                className="btn btn-success rounded-pill py-3 px-4 w-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp me-2" />
                {t('common.whatsapp')} {PHONE_DISPLAY}
              </a>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                title="Deluxe Travel Quito"
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.802489475!2d-78.4678!3d-0.1807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUXVpdG8sIEVjdWFkb3I!5e0!3m2!1ses!2sec!4v1"
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder={t('booking.name')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label htmlFor="name">{t('booking.name')}</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder={t('booking.email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">{t('booking.email')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder={t('contact.subject')}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <label htmlFor="subject">{t('contact.subject')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder={t('contact.message')}
                        id="message"
                        style={{ height: 100 }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <label htmlFor="message">{t('contact.message')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-success w-100 py-3"
                      type="submit"
                    >
                      <i className="fab fa-whatsapp me-2" />
                      {t('contact.sendWhatsapp')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
