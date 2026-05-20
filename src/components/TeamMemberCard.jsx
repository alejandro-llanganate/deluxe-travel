import React from 'react'
import { getWhatsAppUrl } from '../data/contact'

export default function TeamMemberCard({ member, delay = '0.1s' }) {
  return (
    <div className="wow fadeInUp h-100" data-wow-delay={delay}>
      <div className="team-item h-100">
        <div className="overflow-hidden rounded">
          <img
            className="img-fluid w-100"
            src={member.image}
            alt={member.name}
            style={{ height: 360, objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        <div
          className="position-relative d-flex justify-content-center"
          style={{ marginTop: '-19px' }}
        >
          {member.instagram ? (
            <a
              className="btn btn-square mx-1"
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${member.name}`}
            >
              <i className="fab fa-instagram" />
            </a>
          ) : null}
          {member.facebook ? (
            <a
              className="btn btn-square mx-1"
              href={member.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Facebook de ${member.name}`}
            >
              <i className="fab fa-facebook-f" />
            </a>
          ) : null}
          {!member.instagram && !member.facebook ? (
            <a
              className="btn btn-square mx-1"
              href={getWhatsAppUrl('Hola Deluxe Travel, quiero contactarlos.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
            >
              <i className="fab fa-whatsapp" />
            </a>
          ) : null}
        </div>
        <div className="text-center p-4">
          <h5 className="mb-1">{member.name}</h5>
          <small className="text-primary fw-semibold d-block mb-2">{member.role}</small>
          <p className="text-muted small mb-0">{member.bio}</p>
        </div>
      </div>
    </div>
  )
}
