import React from 'react'
import { useI18n } from '../i18n/LanguageContext'

export default function LanguageSwitcher({ className = '', variant = 'auto' }) {
  const { locale, setLocale, t } = useI18n()

  const variantClass =
    variant === 'dark'
      ? 'lang-switcher--dark'
      : variant === 'light'
        ? 'lang-switcher--light'
        : ''

  return (
    <div
      className={`lang-switcher ${variantClass} ${className}`.trim()}
      role="group"
      aria-label={t('lang.switchLabel')}
      data-locale={locale}
    >
      <span className="lang-switcher-glow" aria-hidden="true" />
      <span
        className="lang-switcher-slider"
        aria-hidden="true"
      />
      <button
        type="button"
        className={`lang-switcher-btn ${locale === 'es' ? 'active' : ''}`}
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
      >
        <span className="lang-switcher-flag" aria-hidden="true">
          🇪🇨
        </span>
        <span>{t('lang.es')}</span>
      </button>
      <button
        type="button"
        className={`lang-switcher-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        <span className="lang-switcher-flag" aria-hidden="true">
          🇺🇸
        </span>
        <span>{t('lang.en')}</span>
      </button>
    </div>
  )
}
