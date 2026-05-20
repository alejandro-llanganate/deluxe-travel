import React from 'react'
import PageHero from '../components/PageHero'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'

function Services() {
  return (
    <div>
      <PageHero
        title="Servicios"
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Servicios' },
        ]}
      />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  )
}

export default Services
