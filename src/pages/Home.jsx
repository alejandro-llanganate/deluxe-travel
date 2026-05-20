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
import { findTourByQuery, tours } from '../data/tours'

export default function Home() {
  const navigate = useNavigate()
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
                Viajes diseñados para amar vivir
              </h1>
              <p className="fs-5 fs-md-4 text-white mb-4 animated slideInDown px-2">
                Deluxe Travel Ecuador — tours por la Amazonía, Andes y costa
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
                  placeholder="Ej: Baños, Cuenca, Misahuallí, Chimborazo"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Buscar destino o paquete"
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
                  Buscar
                </button>
              </form>
            </div>
          </div>
      </HomeHero>

      <TourGrid
        subtitle="Paquetes"
        title="Experiencias por Ecuador"
        compactTop
      />
      <div className="container pb-5 text-center">
        <Link to="/packages" className="btn btn-primary rounded-pill py-3 px-5">
          Ver todos los paquetes
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
