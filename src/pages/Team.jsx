import React from 'react'
import PageHero from '../components/PageHero'
import TeamMemberCard from '../components/TeamMemberCard'
import { teamMembers } from '../data/team'

export default function Team() {
  return (
    <div>
      <PageHero
        title="Nuestro equipo"
        breadcrumbs={[
          { label: 'Inicio', to: '/' },
          { label: 'Equipo' },
        ]}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Integrantes
            </h6>
            <h1 className="mb-4">Conoce a Deluxe Travel</h1>
            <p className="mb-5 mx-auto text-muted" style={{ maxWidth: 620 }}>
              Somos un equipo apasionado por Ecuador. Diseñamos cada viaje para que
              vivas viajes seguros, bien organizados y llenos de momentos inolvidables.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, i) => (
              <div key={member.id} className="col-lg-5 col-md-6">
                <TeamMemberCard
                  member={member}
                  delay={`${0.1 + i * 0.2}s`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
