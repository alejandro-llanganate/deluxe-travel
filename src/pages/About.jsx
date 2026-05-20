import React from 'react'
import PageHero from '../components/PageHero'
import AboutContent from '../components/AboutContent'
import TeamSection from '../components/TeamSection'

function About() {
  return (
    <div>
      <PageHero
        title="Sobre nosotros"
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Sobre nosotros' },
        ]}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <AboutContent showCta={false} />
        </div>
      </div>
      <TeamSection />
    </div>
  )
}

export default About
