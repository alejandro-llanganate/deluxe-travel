import { tours as baseTours } from '../data/tours'

export function buildToursRecord(tourTexts) {
  return baseTours.map((tour) => {
    const text = tourTexts[tour.slug] || {}
    return {
      ...tour,
      title: text.title ?? tour.title,
      subtitle: text.subtitle ?? tour.subtitle,
      duration: text.duration ?? tour.duration,
      durationShort: text.durationShort ?? tour.durationShort,
      departure: text.departure ?? tour.departure,
      region: text.region ?? tour.region,
      extra: text.extra ?? tour.extra,
      description: text.description ?? tour.description,
      highlights: text.highlights ?? tour.highlights,
      itinerary: text.itinerary ?? tour.itinerary,
      packageIncludes: text.packageIncludes ?? tour.packageIncludes,
      notIncluded: text.notIncluded ?? tour.notIncluded,
      stops: text.stops ?? tour.stops,
    }
  })
}

export function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj)
}

export function interpolate(str, vars = {}) {
  if (!str || typeof str !== 'string') return str
  return str.replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] != null ? String(vars[key]) : `{${key}}` // eslint-disable-line no-template-curly-in-string
  )
}
