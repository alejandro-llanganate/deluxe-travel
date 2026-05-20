import React, { useState } from 'react'
import { tours, getWhatsAppBookingLink } from '../data/tours'
import { PHONE_DISPLAY, PHONE_TEL, getWhatsAppUrl } from '../data/contact'

export default function BookingSection({ showIntro = true }) {
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

  const generalWa = getWhatsAppUrl(
    `Hola Deluxe Travel, quiero información para reservar. Mi contacto es ${PHONE_DISPLAY}.`
  )

  return (
    <section id="reservas" className="container-xxl py-5 booking-section">
      <div className="container">
        <div className="booking-card p-4 p-lg-5">
          <div className="row g-5 align-items-center">
            {showIntro && (
              <div className="col-lg-5">
                <h6 className="text-primary text-uppercase">Reservas</h6>
                <h2 className="mb-4">Reserva en línea</h2>
                <p className="text-muted mb-4">
                  Cuéntanos qué experiencia te interesa y te respondemos con
                  disponibilidad, precio y los detalles de tu viaje.
                </p>
                <p className="text-muted mb-4">
                  También puedes escribirnos por WhatsApp al{' '}
                  <strong>{PHONE_DISPLAY}</strong> para confirmar tu cupo con el{' '}
                  <strong>50% de anticipo</strong> del valor del paquete.
                </p>
                <a
                  href={generalWa}
                  className="btn btn-success rounded-pill py-3 px-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp me-2" />
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </div>
            )}
            <div className={showIntro ? 'col-lg-7' : 'col-12'}>
              <h2 className="mb-4">Reserva tu tour</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="booking-name"
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label htmlFor="booking-name">Tu nombre</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="booking-email"
                        placeholder="Tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="booking-email">Tu correo</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="booking-datetime"
                        placeholder="Fecha y hora"
                        value={datetime}
                        onChange={(e) => setDatetime(e.target.value)}
                      />
                      <label htmlFor="booking-datetime">Fecha y hora</label>
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
                        <option value="">Selecciona un paquete</option>
                        {tours.map((tour) => (
                          <option key={tour.slug} value={tour.slug}>
                            {tour.title}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="booking-tour">Paquete</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Solicitud especial"
                        id="booking-message"
                        style={{ height: 100 }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <label htmlFor="booking-message">Solicitud especial</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <p className="small text-muted mb-2">
                      Al enviar, abriremos WhatsApp con tu solicitud. La reserva
                      se confirma con el <strong>50% de anticipo</strong> del
                      paquete elegido.
                    </p>
                    <button
                      className="btn btn-success w-100 py-3 rounded-pill"
                      type="submit"
                    >
                      <i className="fab fa-whatsapp me-2" />
                      Enviar reserva por WhatsApp
                    </button>
                    <p className="small text-muted mt-2 mb-0 text-center">
                      O llámanos:{' '}
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
