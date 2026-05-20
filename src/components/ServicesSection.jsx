import React from 'react'

const SERVICES = [
  {
    icon: 'fa-map-marked-alt',
    title: 'Paquetes por Ecuador',
    text: 'Días completos y tours de varios días a la Amazonía, Andes, costa y sur del país, con itinerarios claros y salida desde Quito.',
    delay: '0.1s',
  },
  {
    icon: 'fa-hotel',
    title: 'Hospedaje y traslados',
    text: 'Seleccionamos alojamientos cómodos y coordinamos el transporte para que tu viaje sea seguro y sin complicaciones logísticas.',
    delay: '0.3s',
  },
  {
    icon: 'fa-user-friends',
    title: 'Guías y asesoría',
    text: 'Te orientamos antes y durante el viaje para elegir el paquete ideal y vivir cada destino con información útil y trato cercano.',
    delay: '0.5s',
  },
  {
    icon: 'fa-calendar-check',
    title: 'Reservas ágiles',
    text: 'Reserva con abono desde 20 USD, confirma por WhatsApp y recibe atención personalizada para armar tu próxima aventura.',
    delay: '0.7s',
  },
]

export default function ServicesSection() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Servicios
          </h6>
          <h1 className="mb-5">Cómo te acompañamos</h1>
          <p className="mb-5 mx-auto text-muted" style={{ maxWidth: 640 }}>
            En Deluxe Travel Ecuador organizamos cada detalle para que solo te
            preocupes por disfrutar: naturaleza, cultura y momentos que valen la
            pena recordar.
          </p>
        </div>
        <div className="row g-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay={s.delay}
            >
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4">
                  <i className={`fa fa-3x ${s.icon} text-primary mb-4`} />
                  <h5>{s.title}</h5>
                  <p className="mb-0">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
