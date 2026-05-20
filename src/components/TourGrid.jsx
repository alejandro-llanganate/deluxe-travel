import React from 'react'
import TourCard from './TourCard'
import { useI18n } from '../i18n/LanguageContext'

export default function TourGrid({
  title,
  subtitle,
  compactTop = false,
}) {
  const { t, tours } = useI18n()

  return (
    <div className={`container-xxl py-5${compactTop ? ' pt-2' : ''}`}>
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            {subtitle}
          </h6>
          <h1 className="mb-5">{title}</h1>
          <p className="mb-5 mx-auto" style={{ maxWidth: 640 }}>
            {t('packages.intro')}
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {tours.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} delay={`${0.1 + i * 0.1}s`} />
          ))}
        </div>
      </div>
    </div>
  )
}
