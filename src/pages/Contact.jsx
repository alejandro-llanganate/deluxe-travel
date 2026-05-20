import React, { useState } from 'react'
import PageHero from '../components/PageHero'
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  getWhatsAppUrl,
} from '../data/contact'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const text = [
      'Hola Deluxe Travel,',
      '',
      name ? `Nombre: ${name}` : null,
      email ? `Correo: ${email}` : null,
      subject ? `Asunto: ${subject}` : null,
      message ? `Mensaje: ${message}` : null,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(getWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
  }

  const waGeneral = getWhatsAppUrl(
    'Hola Deluxe Travel, quiero información sobre sus paquetes.'
  )

  return (
    <div>
      <PageHero
        title="Contacto"
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Contacto' },
        ]}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Contacto
            </h6>
            <h1 className="mb-5">Escríbenos, estamos para ayudarte</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Ponte en contacto</h5>
              <p className="mb-4">
                ¿Dudas sobre un paquete, fechas o formas de pago? Escríbenos por
                WhatsApp o usa el formulario. Reservas con{' '}
                <strong>50% de anticipo</strong>.
              </p>
              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Oficina</h5>
                  <p className="mb-0">Quito, Ecuador</p>
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
                  <h5 className="text-primary">Teléfono / WhatsApp</h5>
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
                WhatsApp {PHONE_DISPLAY}
              </a>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                title="Ubicación de Deluxe Travel en Quito, Ecuador"
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
                        placeholder="Tu nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label htmlFor="name">Tu nombre</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Tu correo</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Asunto"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <label htmlFor="subject">Asunto</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Escribe tu mensaje aquí"
                        id="message"
                        style={{ height: 100 }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <label htmlFor="message">Mensaje</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-success w-100 py-3"
                      type="submit"
                    >
                      <i className="fab fa-whatsapp me-2" />
                      Enviar por WhatsApp
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
