import React, { useRef, useEffect } from 'react'

const publicUrl = process.env.PUBLIC_URL || ''
const HERO_VIDEO = `${publicUrl}/assets/video/hero-amazon.mp4`
const HERO_POSTER = `${publicUrl}/assets/img/foto_deluxe_travel.jpg`

export default function HomeHero({ children }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) video.play().catch(() => {})
  }, [])

  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header hero-header-home hero-header-video">
      <div className="hero-scene is-active">
        <video
          ref={videoRef}
          className="hero-scene-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div
          className="hero-scene-poster"
          style={{ backgroundImage: `url(${HERO_POSTER})` }}
          aria-hidden="true"
        />
      </div>
      <div className="hero-video-overlay" />
      <div className="container py-5 position-relative">{children}</div>
    </div>
  )
}
