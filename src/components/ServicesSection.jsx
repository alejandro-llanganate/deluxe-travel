import React from 'react'
import { useI18n } from '../i18n/LanguageContext'

const ICONS = [
  'fa-map-marked-alt',
  'fa-hotel',
  'fa-user-friends',
  'fa-calendar-check',
]

export default function ServicesSection() {
  const { t } = useI18n()
  const items = t('services.items')

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            {t('services.subtitle')}
          </h6>
          <h1 className="mb-5">{t('services.title')}</h1>
          <p className="mb-5 mx-auto text-muted" style={{ maxWidth: 640 }}>
            {t('services.intro')}
          </p>
        </div>
        <div className="row g-4">
          {items.map((s, i) => (
            <div
              key={s.title}
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay={`${0.1 + i * 0.2}s`}
            >
              <div className="service-item rounded pt-3 h-100">
                <div className="p-4">
                  <i className={`fa fa-3x ${ICONS[i]} text-primary mb-4`} />
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
