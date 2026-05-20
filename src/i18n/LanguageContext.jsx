import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import es from './locales/es'
import en from './locales/en'
import { buildToursRecord, getNested, interpolate } from './localize'
import { tours as baseTours } from '../data/tours'
import { getDepositAmount, getWhatsAppUrl, PHONE_DISPLAY } from '../data/contact'

const STORAGE_KEY = 'deluxe-travel-lang'

const locales = { es, en }

const LanguageContext = createContext(null)

function getInitialLocale() {
  if (typeof window === 'undefined') return 'es'
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'es') return saved
  const browser = navigator.language?.toLowerCase() || ''
  return browser.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale)

  const dictionary = locales[locale] || es

  const tours = useMemo(
    () => buildToursRecord(dictionary.tours),
    [dictionary]
  )

  const setLocale = useCallback((next) => {
    const value = next === 'en' ? 'en' : 'es'
    setLocaleState(value)
    localStorage.setItem(STORAGE_KEY, value)
  }, [])

  useEffect(() => {
    document.documentElement.lang = dictionary.meta.htmlLang
    document.title = dictionary.meta.siteTitle
  }, [dictionary])

  const t = useCallback(
    (key, vars) => {
      const value = getNested(dictionary, key)
      if (value == null) return key
      if (typeof value === 'string') return interpolate(value, vars)
      return value
    },
    [dictionary]
  )

  const getTourBySlug = useCallback(
    (slug) => tours.find((tour) => tour.slug === slug),
    [tours]
  )

  const findTourByQuery = useCallback(
    (rawQuery) => {
      const query = rawQuery.trim().toLowerCase()
      if (!query) return null

      const aliases = {
        galapagos: 'puerto-lopez',
        galápagos: 'puerto-lopez',
        ballenas: 'puerto-lopez',
        whales: 'puerto-lopez',
        'isla de la plata': 'puerto-lopez',
        playa: 'montanita-carnaval',
        beach: 'montanita-carnaval',
        carnaval: 'montanita-carnaval',
        carnival: 'montanita-carnaval',
        montañita: 'montanita-carnaval',
        montanita: 'montanita-carnaval',
        amazonia: 'misahualli',
        amazonía: 'misahualli',
        amazon: 'misahualli',
        volcan: 'chimborazo',
        volcán: 'chimborazo',
        volcano: 'chimborazo',
        nevado: 'chimborazo',
        cascadas: 'banos',
        waterfalls: 'banos',
        aventura: 'banos',
        adventure: 'banos',
        guayacanes: 'guayacanes',
        cuenca: 'cuenca-fin-de-ano',
        'fin de año': 'cuenca-fin-de-ano',
        'fin de ano': 'cuenca-fin-de-ano',
        'new year': 'cuenca-fin-de-ano',
      }

      const aliasSlug = aliases[query]
      if (aliasSlug) return getTourBySlug(aliasSlug)

      return (
        tours.find((tour) => tour.slug.includes(query)) ||
        tours.find(
          (tour) =>
            tour.title.toLowerCase().includes(query) ||
            tour.region?.toLowerCase().includes(query) ||
            tour.subtitle?.toLowerCase().includes(query) ||
            tour.stops?.some((s) => s.toLowerCase().includes(query)) ||
            tour.highlights?.some((h) => h.toLowerCase().includes(query))
        )
      )
    },
    [tours, getTourBySlug]
  )

  const getWhatsAppLink = useCallback(
    (tour) => {
      const deposit = getDepositAmount(tour.price)
      const text = t('whatsapp.bookTour', {
        title: tour.title,
        duration: tour.duration,
        price: tour.price,
        deposit,
      })
      return getWhatsAppUrl(text)
    },
    [t]
  )

  const getWhatsAppBookingLink = useCallback(
    ({ name, email, datetime, tourSlug, message }) => {
      const tour = tourSlug ? getTourBySlug(tourSlug) : null
      const deposit = tour ? getDepositAmount(tour.price) : null
      const lines = [
        t('whatsapp.bookingHeader'),
        '',
        name ? `${t('whatsapp.fieldName')}: ${name}` : null,
        email ? `${t('whatsapp.fieldEmail')}: ${email}` : null,
        datetime ? `${t('whatsapp.fieldDate')}: ${datetime}` : null,
        tour
          ? `${t('whatsapp.fieldPackage')}: ${tour.title} — $${tour.price} USD (${tour.duration})`
          : tourSlug
            ? `${t('whatsapp.fieldPackage')}: ${tourSlug}`
            : null,
        message ? `${t('whatsapp.fieldRequest')}: ${message}` : null,
        '',
        deposit
          ? t('whatsapp.bookingDepositFixed', { deposit })
          : t('whatsapp.bookingDepositGeneric'),
        t('whatsapp.bookingContact', { phone: PHONE_DISPLAY }),
      ].filter(Boolean)

      return getWhatsAppUrl(lines.join('\n'))
    },
    [t, getTourBySlug]
  )

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      tours,
      baseTours,
      getTourBySlug,
      findTourByQuery,
      getWhatsAppLink,
      getWhatsAppBookingLink,
    }),
    [
      locale,
      setLocale,
      t,
      tours,
      getTourBySlug,
      findTourByQuery,
      getWhatsAppLink,
      getWhatsAppBookingLink,
    ]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
