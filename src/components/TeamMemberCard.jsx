import React from 'react'
import { getWhatsAppUrl } from '../data/contact'
import { useI18n } from '../i18n/LanguageContext'

export default function TeamMemberCard({ member, delay = '0.1s' }) {
  const { t } = useI18n()
  const role = t(`team.members.${member.id}.role`)
  const bio = t(`team.members.${member.id}.bio`)

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
              aria-label={`Instagram ${member.name}`}
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
              aria-label={`Facebook ${member.name}`}
            >
              <i className="fab fa-facebook-f" />
            </a>
          ) : null}
          {!member.instagram && !member.facebook ? (
            <a
              className="btn btn-square mx-1"
              href={getWhatsAppUrl(t('whatsapp.contact'))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp" />
            </a>
          ) : null}
        </div>
        <div className="text-center p-4">
          <h5 className="mb-1">{member.name}</h5>
          <small className="text-primary fw-semibold d-block mb-2">{role}</small>
          <p className="text-muted small mb-0">{bio}</p>
        </div>
      </div>
    </div>
  )
}
