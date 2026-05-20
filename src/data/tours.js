import {
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
  getDepositAmount,
  getWhatsAppUrl,
} from './contact'

export { WHATSAPP_NUMBER, PHONE_DISPLAY as WHATSAPP_DISPLAY }

/** Imágenes por destino (fuentes indicadas por Deluxe Travel) */
const media = {
  misahualli: {
    image:
      'https://besttripecuador.com/wp-content/uploads/2018/10/word-image-10.jpeg',
    gallery: [
      'https://besttripecuador.com/wp-content/uploads/2018/10/word-image-10.jpeg',
    ],
  },
  chimborazo: {
    image:
      'https://bushop.com/ecuador/wp-content/uploads/sites/5/2020/08/feat-volcan-chimborazo.jpg',
    gallery: [
      'https://bushop.com/ecuador/wp-content/uploads/sites/5/2020/08/feat-volcan-chimborazo.jpg',
    ],
  },
  'montanita-carnaval': {
    image:
      'https://montanitaspanishschool.wordpress.com/wp-content/uploads/2017/03/17028944_1351712018230112_1004291193_n1.jpg',
    gallery: [
      'https://montanitaspanishschool.wordpress.com/wp-content/uploads/2017/03/17028944_1351712018230112_1004291193_n1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTp2znXzQjagZgq6CohRReS6BE5DRXMy7fYA&s',
    ],
  },
  guayacanes: {
    image:
      'https://imagenes.primicias.ec/files/og_thumbnail/uploads/2025/01/13/67859067e1f7a.jpeg',
    gallery: [
      'https://imagenes.primicias.ec/files/og_thumbnail/uploads/2025/01/13/67859067e1f7a.jpeg',
      'https://imagenes.primicias.ec/files/og_thumbnail/uploads/2025/01/13/67859067e1f7a.jpeg',
    ],
  },
  'cuenca-fin-de-ano': {
    image:
      'https://i.ytimg.com/vi/qYt3MqS-T8s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOg2gs64Ro1X4X4kjcNlwkWzujVQ',
    gallery: [
      'https://i.ytimg.com/vi/qYt3MqS-T8s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOg2gs64Ro1X4X4kjcNlwkWzujVQ',
    ],
  },
  'puerto-lopez': {
    image: 'https://goecuador.net/archivos/ciudades/caton-pueto-lopez.jpg',
    gallery: [
      'https://goecuador.net/archivos/ciudades/caton-pueto-lopez.jpg',
    ],
  },
  banos: {
    image:
      'https://i1.wp.com/pasaportesindestino.net/wp-content/uploads/2018/04/2.png?fit=810%2C450&ssl=1',
    gallery: [
      'https://i1.wp.com/pasaportesindestino.net/wp-content/uploads/2018/04/2.png?fit=810%2C450&ssl=1',
    ],
  },
}

export const tours = [
  {
    slug: 'misahualli',
    title: 'Misahuallí',
    subtitle: 'Amazonía ecuatoriana',
    duration: '1 día · Full day',
    durationShort: '1 día',
    price: 40,
    deposit: 20,
    currency: 'USD',
    included: true,
    departure: 'Quito',
    image: media.misahualli.image,
    gallery: media.misahualli.gallery,
    region: 'Napo',
    highlights: [
      'Experiencia cultural en la Amazonía',
      'Interacción con comunidades locales',
      'Naturaleza y aventura en un solo día',
    ],
    description:
      'Vive la magia de Misahuallí en un día completo. Conoce la flora y fauna amazónica, disfruta de actividades culturales auténticas y déjate sorprender por uno de los destinos más vibrantes del oriente ecuatoriano.',
    itinerary: [
      'Salida desde Quito',
      'Llegada a Misahuallí y actividades programadas',
      'Experiencias culturales y de naturaleza',
      'Regreso a Quito',
    ],
    packageIncludes: [
      'Transporte ida y vuelta desde Quito',
      'Guía especializado en la Amazonía',
      'Actividades culturales y de naturaleza programadas',
      'Coordinación Deluxe Travel durante el día',
      'Seguro básico de viaje (según política del operador)',
    ],
    notIncluded: ['Alimentación no especificada', 'Gastos personales y propinas'],
  },
  {
    slug: 'chimborazo',
    title: 'Volcán Chimborazo',
    subtitle: 'Nevados y aventura',
    duration: '1 día · Full day',
    durationShort: '1 día',
    price: 40,
    deposit: 40,
    currency: 'USD',
    included: true,
    departure: 'Quito',
    image: media.chimborazo.image,
    gallery: media.chimborazo.gallery,
    region: 'Chimborazo',
    highlights: [
      'Visita al volcán más alto del mundo (medido desde el centro de la Tierra)',
      'Paisajes nevados únicos',
      'Fotografía y caminata en altura',
    ],
    description:
      'Aventúrate al Chimborazo, icono de los Andes ecuatorianos. Disfruta de paisajes de nieve, aire puro y momentos inolvidables en uno de los volcanes más imponentes del país.',
    itinerary: [
      'Salida desde Quito',
      'Ascenso y visita a zona del volcán Chimborazo',
      'Tiempo libre para fotos y disfrutar el paisaje',
      'Regreso a Quito',
    ],
    packageIncludes: [
      'Transporte ida y vuelta desde Quito',
      'Ingreso y coordinación en zona del Chimborazo',
      'Guía de montaña / aventura',
      'Tiempo para fotografía y caminata ligera',
      'Seguro básico de viaje (según política del operador)',
    ],
    notIncluded: ['Equipo técnico de montañismo especializado', 'Comidas y bebidas'],
  },
  {
    slug: 'montanita-carnaval',
    title: 'Carnaval en Montañita',
    subtitle: 'Fiesta y playa',
    duration: '3 días / 2 noches',
    durationShort: '3 días',
    price: 170,
    deposit: 40,
    currency: 'USD',
    included: true,
    departure: 'Quito',
    image: media['montanita-carnaval'].image,
    gallery: media['montanita-carnaval'].gallery,
    region: 'Santa Elena',
    highlights: [
      'Carnaval en la playa más famosa de Ecuador',
      'Fiesta, música y ambiente costero',
      'Todo incluido: hospedaje y actividades',
    ],
    description:
      'Celebra el Carnaval en Montañita con Deluxe Travel. Tres días de sol, playa, música y la mejor energía de la costa ecuatoriana. ¡Una experiencia que no olvidarás!',
    itinerary: [
      'Día 1: Salida y llegada a Montañita',
      'Día 2: Actividades de Carnaval y playa',
      'Día 3: Mañana libre y regreso',
    ],
    packageIncludes: [
      'Transporte ida y vuelta desde Quito',
      '2 noches de hospedaje en la costa',
      'Coordinación de actividades de Carnaval',
      'Desayunos según hotel seleccionado',
      'Guía / coordinador Deluxe Travel',
    ],
    notIncluded: ['Cenas y bebidas alcohólicas', 'Actividades opcionales no listadas'],
  },
  {
    slug: 'guayacanes',
    title: 'Florecimiento de Guayacanes',
    subtitle: 'Ruta del sur',
    duration: '3 días / 2 noches',
    durationShort: '3 días',
    price: 185,
    deposit: 40,
    currency: 'USD',
    included: true,
    departure: 'Quito',
    image: media.guayacanes.image,
    gallery: media.guayacanes.gallery,
    region: 'Sur de Ecuador',
    stops: ['Huaquillas', 'Isla San Gregorio', 'Chorro del Girón', 'Cuenca'],
    highlights: [
      'Florecimiento amarillo de los guayacanes',
      'Isla San Gregorio y Chorro del Girón',
      'Cuenca, patrimonio cultural',
    ],
    description:
      'Recorre el sur de Ecuador en época de florecimiento de los guayacanes. Un viaje lleno de color, naturaleza y cultura por Huaquillas, Isla San Gregorio, Chorro del Girón y la hermosa Cuenca.',
    itinerary: [
      'Día 1: Salida — Huaquillas e Isla San Gregorio',
      'Día 2: Chorro del Girón y paisajes del sur',
      'Día 3: Cuenca y regreso',
    ],
    packageIncludes: [
      'Transporte terrestre durante el recorrido',
      '2 noches de hospedaje',
      'Visitas a Huaquillas, Isla San Gregorio y Chorro del Girón',
      'Tiempo en Cuenca (patrimonio cultural)',
      'Guía coordinador Deluxe Travel',
    ],
    notIncluded: ['Entradas a sitios con costo adicional', 'Comidas no indicadas en el hotel'],
  },
  {
    slug: 'cuenca-fin-de-ano',
    title: 'Fin de Año en Cuenca',
    subtitle: 'Celebración en la Atenas del Ecuador',
    duration: '2 días / 2 noches',
    durationShort: '2 días',
    price: 199,
    deposit: 40,
    currency: 'USD',
    included: true,
    departure: 'Quito',
    image: media['cuenca-fin-de-ano'].image,
    gallery: media['cuenca-fin-de-ano'].gallery,
    region: 'Azuay',
    highlights: [
      'Recibe el Año Nuevo en Cuenca',
      'Centro histórico y catedral',
      'Ambiente festivo y tradiciones',
    ],
    description:
      'Despide el año en Cuenca, una de las ciudades más bellas de Ecuador. Arquitectura colonial, gastronomía, tradición y la magia de fin de año en la Atenas del Ecuador.',
    itinerary: [
      'Día 1: Salida desde Quito — llegada a Cuenca',
      'Noche de Fin de Año: celebración en la ciudad',
      'Día 2: Recorrido y regreso',
    ],
    packageIncludes: [
      'Transporte ida y vuelta desde Quito',
      '2 noches de hospedaje en Cuenca',
      'Recorrido por el centro histórico y puntos emblemáticos',
      'Coordinación para la noche de Fin de Año',
      'Guía local / coordinador Deluxe Travel',
    ],
    notIncluded: ['Cenas de gala no incluidas', 'Entradas a museos o eventos privados'],
  },
  {
    slug: 'puerto-lopez',
    title: 'Puerto López',
    subtitle: 'Temporada de ballenas',
    duration: '3 días / 2 noches',
    durationShort: '3 días',
    price: 170,
    deposit: 40,
    currency: 'USD',
    included: true,
    departure: 'Quito',
    image: media['puerto-lopez'].image,
    gallery: media['puerto-lopez'].gallery,
    region: 'Manabí',
    extra: 'Incluye Isla de la Plata',
    highlights: [
      'Avistamiento de ballenas jorobadas',
      'Isla de la Plata — el Galápagos de los pobres',
      'Playa y naturaleza en la costa manabita',
    ],
    description:
      'Vive la temporada de ballenas en Puerto López. Observa estos gigantes del mar, visita la Isla de la Plata y disfruta de la costa ecuatoriana en un paquete todo incluido de 3 días.',
    itinerary: [
      'Día 1: Salida y llegada a Puerto López',
      'Día 2: Avistamiento de ballenas e Isla de la Plata',
      'Día 3: Mañana libre y regreso',
    ],
    packageIncludes: [
      'Transporte ida y vuelta desde Quito',
      '2 noches de hospedaje en la costa',
      'Avistamiento de ballenas jorobadas (temporada)',
      'Excursión a Isla de la Plata',
      'Guía y coordinación Deluxe Travel',
    ],
    notIncluded: ['Actividades marítimas no programadas', 'Propinas y gastos personales'],
  },
  {
    slug: 'banos',
    title: 'Baños de Agua Santa',
    subtitle: 'Aventura y cascadas',
    duration: '1 día · Full day',
    durationShort: '1 día',
    price: 40,
    deposit: 40,
    currency: 'USD',
    included: true,
    departure: 'Quito',
    image: media.banos.image,
    gallery: media.banos.gallery,
    region: 'Tungurahua',
    highlights: [
      'Cascadas y paisajes de ensueño',
      'Aventura en la puerta de la Amazonía',
      'Paseo de la famosa Ruta de las Cascadas',
    ],
    description:
      'Diviértete en Baños de Agua Santa, el destino de aventura por excelencia en Ecuador. Cascadas, naturaleza exuberante y adrenalina en un full day todo incluido desde Quito.',
    itinerary: [
      'Salida desde Quito',
      'Recorrido por Baños y cascadas',
      'Actividades de aventura programadas',
      'Regreso a Quito',
    ],
    packageIncludes: [
      'Transporte ida y vuelta desde Quito',
      'Recorrido por la Ruta de las Cascadas',
      'Coordinación de actividades de aventura programadas',
      'Guía en destino',
      'Seguro básico de viaje (según política del operador)',
    ],
    notIncluded: [
      'Actividades opcionales con costo extra (canopy, puenting, etc.)',
      'Almuerzo si no está especificado',
    ],
  },
]

export function getTourBySlug(slug) {
  return tours.find((t) => t.slug === slug)
}

const SEARCH_ALIASES = {
  galapagos: 'puerto-lopez',
  galápagos: 'puerto-lopez',
  ballenas: 'puerto-lopez',
  'isla de la plata': 'puerto-lopez',
  playa: 'montanita-carnaval',
  carnaval: 'montanita-carnaval',
  montañita: 'montanita-carnaval',
  montanita: 'montanita-carnaval',
  amazonia: 'misahualli',
  amazonía: 'misahualli',
  napo: 'misahualli',
  volcan: 'chimborazo',
  volcán: 'chimborazo',
  nevado: 'chimborazo',
  cascadas: 'banos',
  aventura: 'banos',
  guayacanes: 'guayacanes',
  cuenca: 'cuenca-fin-de-ano',
  'fin de año': 'cuenca-fin-de-ano',
  'fin de ano': 'cuenca-fin-de-ano',
}

export function findTourByQuery(rawQuery) {
  const query = rawQuery.trim().toLowerCase()
  if (!query) return null

  const aliasSlug = SEARCH_ALIASES[query]
  if (aliasSlug) return getTourBySlug(aliasSlug)

  return (
    tours.find((t) => t.slug.includes(query)) ||
    tours.find(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.region?.toLowerCase().includes(query) ||
        t.subtitle?.toLowerCase().includes(query) ||
        t.stops?.some((s) => s.toLowerCase().includes(query)) ||
        t.highlights?.some((h) => h.toLowerCase().includes(query))
    )
  )
}

export function getWhatsAppLink(tour) {
  const deposit = getDepositAmount(tour.price)
  return getWhatsAppUrl(
    `Hola Deluxe Travel, quiero reservar: ${tour.title} (${tour.duration}) — $${tour.price} USD por persona. Confirmo mi cupo con el 50% de anticipo ($${deposit} USD).`
  )
}

export function getWhatsAppBookingLink({
  name,
  email,
  datetime,
  tourSlug,
  message,
}) {
  const tour = tourSlug ? getTourBySlug(tourSlug) : null
  const deposit = tour ? getDepositAmount(tour.price) : null
  const lines = [
    'Hola Deluxe Travel, quiero reservar un tour:',
    '',
    name ? `Nombre: ${name}` : null,
    email ? `Correo: ${email}` : null,
    datetime ? `Fecha preferida: ${datetime}` : null,
    tour
      ? `Paquete: ${tour.title} — $${tour.price} USD (${tour.duration})`
      : tourSlug
        ? `Paquete: ${tourSlug}`
        : null,
    message ? `Solicitud especial: ${message}` : null,
    '',
    deposit
      ? `Confirmo mi cupo con el 50% de anticipo ($${deposit} USD).`
      : 'Confirmo mi cupo con el 50% de anticipo del paquete.',
    `Contacto: ${PHONE_DISPLAY}`,
  ].filter(Boolean)

  return getWhatsAppUrl(lines.join('\n'))
}
