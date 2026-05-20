import React from 'react'
import { getWhatsAppUrl, PHONE_DISPLAY } from '../data/contact'
import { useI18n } from '../i18n/LanguageContext'

export default function WhatsAppFloat() {
  const { t } = useI18n()
  const href = getWhatsAppUrl(t('whatsapp.general'))

  return (
    <a
      href={href}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t('common.whatsapp')} ${PHONE_DISPLAY}`}
      title={`${t('common.whatsapp')} ${PHONE_DISPLAY}`}
    >
      <i className="fab fa-whatsapp" />
    </a>
  )
}
