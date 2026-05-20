import React from 'react'
import { assetPath } from '../utils/assetPath'
import { useI18n } from '../i18n/LanguageContext'

const TESTIMONIAL_IMGS = [
  assetPath('assets/img/testimonial-1.jpg'),
  assetPath('assets/img/testimonial-2.jpg'),
  assetPath('assets/img/testimonial-3.jpg'),
  assetPath('assets/img/testimonial-4.jpg'),
]

export default function TestimonialsSection() {
  const { t } = useI18n()
  const items = t('testimonials.items')

  return (
    <section id="testimonios" className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            {t('testimonials.subtitle')}
          </h6>
          <h1 className="mb-5">{t('testimonials.title')}</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="testimonial-item bg-white text-center border p-4"
            >
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src={TESTIMONIAL_IMGS[i]}
                alt={item.name}
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">{item.name}</h5>
              <p>{item.place}</p>
              <p className="mb-0">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
