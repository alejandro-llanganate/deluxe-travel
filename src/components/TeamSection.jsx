import React from 'react'
import { Link } from 'react-router-dom'
import TeamMemberCard from './TeamMemberCard'
import { teamMembers } from '../data/team'

export default function TeamSection({ showLink = true }) {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Equipo
          </h6>
          <h1 className="mb-5">Nuestros integrantes</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, i) => (
            <div key={member.id} className="col-lg-5 col-md-6">
              <TeamMemberCard member={member} delay={`${0.1 + i * 0.2}s`} />
            </div>
          ))}
        </div>
        {showLink && (
          <div className="text-center mt-4">
            <Link to="/team" className="btn btn-primary rounded-pill py-3 px-5">
              Conocer al equipo
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
