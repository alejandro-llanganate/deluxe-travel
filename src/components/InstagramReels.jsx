import React from 'react'
import { INSTAGRAM_REELS } from '../data/instagram'

export default function InstagramReels() {
  return (
    <section className="container-xxl py-5 instagram-reels-section">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Instagram
          </h6>
          <h2 className="mb-3">Vive la experiencia Deluxe</h2>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: 620 }}>
            Sigue nuestros reels y descubre en video los destinos que operamos en
            Ecuador.
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
                  <span>{reel.label}</span>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-auto small"
                  >
                    Ver en Instagram
                  </a>
                </div>
                <div className="instagram-reel-embed">
                  <iframe
                    title={`Reel Instagram ${reel.id}`}
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
