import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TourGrid from '../components/TourGrid'
import TeamSection from '../components/TeamSection'
import HomeHero from '../components/HomeHero'
import ServicesSection from '../components/ServicesSection'
import BookingSection from '../components/BookingSection'
import ProcessSection from '../components/ProcessSection'
import TestimonialsSection from '../components/TestimonialsSection'
import EcuadorOperationsMap from '../components/EcuadorOperationsMap'
import InstagramReels from '../components/InstagramReels'
import { useI18n } from '../i18n/LanguageContext'

export default function Home() {
  const navigate = useNavigate()
  const { t, tours, findTourByQuery } = useI18n()
  const [searchQuery, setSearchQuery] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    const tour = findTourByQuery(searchQuery)
    if (tour) {
      navigate(`/tours/${tour.slug}`)
      return
    }
    navigate('/packages')
  }

  return (
    <div>
      <HomeHero>
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown hero-title">
              {t('hero.title')}
            </h1>
            <p className="fs-5 fs-md-4 text-white mb-4 animated slideInDown px-2">
              {t('hero.subtitle')}
            </p>
            <form
              className="position-relative w-100 px-2 px-sm-3 mx-auto hero-search-form animated slideInDown"
              style={{ maxWidth: 560 }}
              onSubmit={handleSearch}
              role="search"
            >
              <input
                className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                type="search"
                list="destinos-deluxe"
                placeholder={t('hero.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label={t('hero.searchPlaceholder')}
              />
              <datalist id="destinos-deluxe">
                {tours.map((tour) => (
                  <option key={tour.slug} value={tour.title} />
                ))}
              </datalist>
              <button
                type="submit"
                className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                style={{ marginTop: 7 }}
              >
                {t('hero.search')}
              </button>
            </form>
          </div>
        </div>
      </HomeHero>

      <TourGrid
        subtitle={t('packages.subtitle')}
        title={t('packages.title')}
        compactTop
      />
      <div className="container pb-5 text-center">
        <Link to="/packages" className="btn btn-primary rounded-pill py-3 px-5">
          {t('common.seeAllPackages')}
        </Link>
      </div>

      <EcuadorOperationsMap />
      <InstagramReels />

      <ServicesSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <BookingSection />
    </div>
  )
}
