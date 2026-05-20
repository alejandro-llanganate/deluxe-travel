import React, { useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL, getWhatsAppUrl } from '../data/contact'
import { useI18n } from '../i18n/LanguageContext'

export default function BookingSection({ showIntro = true }) {
  const { t, tours, getWhatsAppBookingLink } = useI18n()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [datetime, setDatetime] = useState('')
  const [tourSlug, setTourSlug] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const url = getWhatsAppBookingLink({
      name,
      email,
      datetime,
      tourSlug,
      message,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const generalWa = getWhatsAppUrl(t('whatsapp.general'))

  return (
    <section id="reservas" className="container-xxl py-5 booking-section">
      <div className="container">
        <div className="booking-card p-4 p-lg-5">
          <div className="row g-5 align-items-center">
            {showIntro && (
              <div className="col-lg-5">
                <h6 className="text-primary text-uppercase">
                  {t('booking.subtitle')}
                </h6>
                <h2 className="mb-4">{t('booking.titleOnline')}</h2>
                <p className="text-muted mb-4">{t('booking.intro1')}</p>
                <p className="text-muted mb-4">
                  {t('booking.intro2', { phone: PHONE_DISPLAY })}
                </p>
                <a
                  href={generalWa}
                  className="btn btn-success rounded-pill py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp me-2" />
                  {t('common.whatsapp')} {PHONE_DISPLAY}
                </a>
              </div>
            )}
            <div className={showIntro ? 'col-lg-7' : 'col-12'}>
              <h2 className="mb-4">{t('booking.titleForm')}</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="booking-name"
                        placeholder={t('booking.name')}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label htmlFor="booking-name">{t('booking.name')}</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="booking-email"
                        placeholder={t('booking.email')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="booking-email">{t('booking.email')}</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="booking-datetime"
                        placeholder={t('booking.datetime')}
                        value={datetime}
                        onChange={(e) => setDatetime(e.target.value)}
                      />
                      <label htmlFor="booking-datetime">{t('booking.datetime')}</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select
                        className="form-select"
                        id="booking-tour"
                        value={tourSlug}
                        onChange={(e) => setTourSlug(e.target.value)}
                        required
                      >
                        <option value="">{t('booking.selectPackage')}</option>
                        {tours.map((tour) => (
                          <option key={tour.slug} value={tour.slug}>
                            {tour.title}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="booking-tour">{t('booking.package')}</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder={t('booking.specialRequest')}
                        id="booking-message"
                        style={{ height: 100 }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <label htmlFor="booking-message">
                        {t('booking.specialRequest')}
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="small text-muted mb-2">{t('booking.submitNote')}</p>
                    <button
                      className="btn btn-success w-100 py-3 rounded-pill"
                      type="submit"
                    >
                      <i className="fab fa-whatsapp me-2" />
                      {t('booking.submit')}
                    </button>
                    <p className="small text-muted mt-2 mb-0 text-center">
                      {t('common.callUs')}{' '}
                      <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
