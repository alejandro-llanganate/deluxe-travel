import React from 'react'
import PageHero from '../components/PageHero'
import TourGrid from '../components/TourGrid'

export default function Packages() {
  return (
    <div>
      <PageHero
        title="Paquetes"
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Paquetes' },
        ]}
      />
      <TourGrid
        subtitle="Paquetes"
        title="Viaja por Ecuador con Deluxe Travel"
      />
    </div>
  )
}
