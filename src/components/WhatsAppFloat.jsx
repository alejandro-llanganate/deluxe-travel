import React from 'react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../data/contact'

export default function WhatsAppFloat() {
  const href = getWhatsAppUrl(
    'Hola Deluxe Travel, me gustaría información sobre sus paquetes.'
  )

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chatear por WhatsApp al ${PHONE_DISPLAY}`}
      title={`WhatsApp ${PHONE_DISPLAY}`}
    >
      <i className="fab fa-whatsapp" />
    </a>
  )
}
