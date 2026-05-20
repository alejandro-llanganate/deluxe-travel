import React from 'react'
import { assetPath } from '../utils/assetPath'

const TESTIMONIALS = [
  {
    name: 'María González',
    place: 'Quito, Ecuador',
    text: 'El tour a Misahuallí superó nuestras expectativas. Organización impecable y un trato muy cercano.',
    img: assetPath('assets/img/testimonial-1.jpg'),
    alt: 'María González, cliente',
  },
  {
    name: 'Carlos Ramírez',
    place: 'Guayaquil, Ecuador',
    text: 'Reservamos Montañita para carnaval y todo salió perfecto: traslado, hotel y buena energía del equipo.',
    img: assetPath('assets/img/testimonial-2.jpg'),
    alt: 'Carlos Ramírez, cliente',
  },
  {
    name: 'Ana López',
    place: 'Cuenca, Ecuador',
    text: 'Baños fue una experiencia increíble. Deluxe Travel nos guió en cada detalle del día.',
    img: assetPath('assets/img/testimonial-3.jpg'),
    alt: 'Ana López, cliente',
  },
  {
    name: 'Pedro Mendoza',
    place: 'Ambato, Ecuador',
    text: 'Puerto López y las ballenas: un viaje que recomiendo totalmente. Muy profesionales.',
    img: assetPath('assets/img/testimonial-4.jpg'),
    alt: 'Pedro Mendoza, cliente',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonios
          </h6>
          <h1 className="mb-5">Lo que dicen nuestros viajeros</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="testimonial-item bg-white text-center border p-4"
            >
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={t.img}
                alt={t.alt}
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">{t.name}</h5>
              <p>{t.place}</p>
              <p className="mb-0">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
