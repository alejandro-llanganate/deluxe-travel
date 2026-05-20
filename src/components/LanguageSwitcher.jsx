import React from 'react'
import { useI18n } from '../i18n/LanguageContext'

export default function LanguageSwitcher({ className = '' }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      className={`lang-switcher ${className}`}
      role="group"
      aria-label={t('lang.switchLabel')}
    >
      <button
        type="button"
        className={`lang-switcher-btn ${locale === 'es' ? 'active' : ''}`}
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
      >
        {t('lang.es')}
      </button>
      <button
        type="button"
        className={`lang-switcher-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        {t('lang.en')}
      </button>
    </div>
  )
}
