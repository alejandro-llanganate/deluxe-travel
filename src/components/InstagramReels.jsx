import React from 'react'
import { INSTAGRAM_REELS } from '../data/instagram'
import { useI18n } from '../i18n/LanguageContext'

export default function InstagramReels() {
  const { t } = useI18n()
  const labels = t('instagram.labels')

  return (
    <section className="container-xxl py-5 instagram-reels-section">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            {t('instagram.subtitle')}
          </h6>
          <h2 className="mb-3">{t('instagram.title')}</h2>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: 620 }}>
            {t('instagram.intro')}
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {INSTAGRAM_REELS.map((reel, i) => (
            <div
              key={reel.id}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + i * 0.15}s`}
            >
              <div className="instagram-reel-card h-100">
                <div className="instagram-reel-header">
                  <i className="fab fa-instagram" />
                  <span>{labels[i] || reel.label}</span>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-auto small"
                  >
                    {t('instagram.viewOnIg')}
                  </a>
                </div>
                <div className="instagram-reel-embed">
                  <iframe
                    title={`Instagram ${reel.id}`}
                    src={reel.embedUrl}
                    allow="encrypted-media"
                    scrolling="no"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
