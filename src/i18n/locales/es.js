import { tours } from '../../data/tours'
import { DESTINATION_POINTS, HUB } from '../../data/destinationsMap'

function toursFromBase() {
  return Object.fromEntries(
    tours.map((t) => [
      t.slug,
      {
        title: t.title,
        subtitle: t.subtitle,
        duration: t.duration,
        durationShort: t.durationShort,
        departure: t.departure,
        region: t.region,
        extra: t.extra,
        description: t.description,
        highlights: t.highlights,
        itinerary: t.itinerary,
        packageIncludes: t.packageIncludes,
        notIncluded: t.notIncluded,
        stops: t.stops,
      },
    ])
  )
}

const es = {
  meta: {
    htmlLang: 'es',
    siteTitle: 'Deluxe Travel Ecuador | Viajes diseñados para amar vivir',
  },
  nav: {
    home: 'Inicio',
    about: 'Sobre nosotros',
    services: 'Servicios',
    packages: 'Paquetes',
    team: 'Equipo',
    contact: 'Contacto',
    book: 'Reservar',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  topbar: {
    location: 'Quito, Ecuador',
  },
  lang: {
    es: 'ES',
    en: 'EN',
    switchLabel: 'Idioma',
  },
  hero: {
    title: 'Viajes diseñados para amar vivir',
    subtitle: 'Deluxe Travel Ecuador — tours por la Amazonía, Andes y costa',
    searchPlaceholder: 'Ej: Baños, Cuenca, Misahuallí, Chimborazo',
    search: 'Buscar',
  },
  common: {
    included: 'Incluido',
    askUs: 'Consultar',
    perPerson: 'por persona',
    seeMore: 'Ver más',
    book: 'Reservar',
    seeAllPackages: 'Ver todos los paquetes',
    from: 'Desde',
    allIncluded: 'Todo incluido',
    breadcrumbHome: 'Inicio',
    breadcrumbPackages: 'Paquetes',
    duration: 'Duración',
    departure: 'Salida',
    price: 'Precio',
    reserve50: 'Reserva (50%)',
    depositNote: 'Anticipo de {amount} USD (50% del paquete) para asegurar tu cupo',
    paymentNote:
      'Paga el 50% para confirmar y el saldo antes o durante el viaje. Aceptamos tarjeta, transferencia o efectivo.',
    routeStops: 'Destinos del recorrido:',
    packageIncludes: 'Qué incluye el paquete',
    notIncludes: 'No incluye',
    highlights: 'Lo más destacado',
    itinerary: 'Itinerario',
    bookingForm: 'Formulario de reserva',
    whatsapp: 'WhatsApp',
    callUs: 'O llámanos:',
    usd: 'USD',
  },
  packages: {
    subtitle: 'Paquetes',
    title: 'Experiencias por Ecuador',
    pageTitle: 'Paquetes',
    pageHeroTitle: 'Viaja por Ecuador con Deluxe Travel',
    intro:
      'Creamos Deluxe Travel para que tus experiencias por Ecuador sean extraordinarias. ¡Vamos, viajemos juntos!',
  },
  map: {
    subtitle: 'Cobertura',
    title: 'Mapa de operaciones en Ecuador',
    intro:
      'Todos nuestros paquetes salen desde Quito y te llevan a destinos reales que operamos hoy. Explora el mapa y elige tu próxima aventura.',
    hubName: HUB.name,
    hubSubtitle: HUB.subtitle,
    legendHub: 'Quito — base',
    legendDest: 'Destinos activos',
    sidebarTitle: 'Destinos que operamos',
    viewPackage: 'Ver paquete',
    departureFrom: '· Desde',
  },
  instagram: {
    subtitle: 'Instagram',
    title: 'Vive la experiencia Deluxe',
    intro:
      'Sigue nuestros reels y descubre en video los destinos que operamos en Ecuador.',
    viewOnIg: 'Ver en Instagram',
    labels: [
      'Deluxe Travel en Instagram',
      'Experiencias en Ecuador',
      'Aventuras Deluxe',
    ],
  },
  services: {
    subtitle: 'Servicios',
    title: 'Cómo te acompañamos',
    intro:
      'En Deluxe Travel Ecuador organizamos cada detalle para que solo te preocupes por disfrutar: naturaleza, cultura y momentos que valen la pena recordar.',
    pageTitle: 'Servicios',
    items: [
      {
        title: 'Paquetes por Ecuador',
        text: 'Días completos y tours de varios días a la Amazonía, Andes, costa y sur del país, con itinerarios claros y salida desde Quito.',
      },
      {
        title: 'Hospedaje y traslados',
        text: 'Seleccionamos alojamientos cómodos y coordinamos el transporte para que tu viaje sea seguro y sin complicaciones logísticas.',
      },
      {
        title: 'Guías y asesoría',
        text: 'Te orientamos antes y durante el viaje para elegir el paquete ideal y vivir cada destino con información útil y trato cercano.',
      },
      {
        title: 'Reservas ágiles',
        text: 'Reserva con 50% de anticipo, confirma por WhatsApp y recibe atención personalizada para armar tu próxima aventura.',
      },
    ],
  },
  process: {
    subtitle: 'Proceso',
    title: '3 pasos sencillos',
    steps: [
      {
        title: 'Elige tu destino',
        text: 'Explora nuestros paquetes por Ecuador y selecciona la experiencia que más te emocione.',
      },
      {
        title: 'Confirma tu reserva',
        text: 'Separa tu cupo con el 50% de anticipo y coordina el pago por transferencia, tarjeta o efectivo.',
      },
      {
        title: '¡A viajar!',
        text: 'Nos encargamos de la logística para que disfrutes tu viaje con tranquilidad y buena compañía.',
      },
    ],
  },
  team: {
    subtitle: 'Equipo',
    title: 'Nuestros integrantes',
    pageTitle: 'Nuestro equipo',
    pageIntro:
      'Somos un equipo apasionado por Ecuador. Diseñamos cada viaje para que vivas experiencias seguras, bien organizadas y llenas de momentos inolvidables.',
    meetTeam: 'Conocer al equipo',
    members: {
      agustina: {
        role: 'Cofundadora · Guía de aventura',
        bio: 'Apasionada por la naturaleza y las experiencias auténticas en Ecuador. Diseña rutas que conectan viajeros con cada destino.',
      },
      damian: {
        role: 'Cofundador · Coordinación de viajes',
        bio: 'Organiza cada detalle para que tu viaje sea fluido, seguro y memorable. Atención cercana antes, durante y después del tour.',
      },
    },
  },
  testimonials: {
    subtitle: 'Testimonios',
    title: 'Lo que dicen nuestros viajeros',
    items: [
      {
        name: 'María González',
        place: 'Quito, Ecuador',
        text: 'El tour a Misahuallí superó nuestras expectativas. Organización impecable y un trato muy cercano.',
      },
      {
        name: 'Carlos Ramírez',
        place: 'Guayaquil, Ecuador',
        text: 'Reservamos Montañita para carnaval y todo salió perfecto: traslado, hotel y buena energía del equipo.',
      },
      {
        name: 'Ana López',
        place: 'Cuenca, Ecuador',
        text: 'Baños fue una experiencia increíble. Deluxe Travel nos guió en cada detalle del día.',
      },
      {
        name: 'Pedro Mendoza',
        place: 'Ambato, Ecuador',
        text: 'Puerto López y las ballenas: un viaje que recomiendo totalmente. Muy profesionales.',
      },
    ],
  },
  about: {
    subtitle: 'Sobre nosotros',
    title: 'Deluxe Travel Ecuador',
    p1: 'Somos un equipo ecuatoriano que organiza tours por la Amazonía, los Andes y la costa. Salimos desde Quito con rutas claras, precios transparentes y acompañamiento cercano en cada viaje.',
    p2: 'Agustina y Damian coordinan cada salida para que disfrutes la experiencia sin preocuparte por los detalles. Reserva con el 50% de anticipo y el resto antes o durante el tour.',
    seePackages: 'Ver paquetes',
    pageTitle: 'Sobre nosotros',
  },
  booking: {
    subtitle: 'Reservas',
    titleOnline: 'Reserva en línea',
    intro1:
      'Cuéntanos qué experiencia te interesa y te respondemos con disponibilidad, precio y los detalles de tu viaje.',
    intro2:
      'También puedes escribirnos por WhatsApp al {phone} para confirmar tu cupo con el 50% de anticipo del valor del paquete.',
    titleForm: 'Reserva tu tour',
    name: 'Tu nombre',
    email: 'Tu correo',
    datetime: 'Fecha y hora',
    package: 'Paquete',
    selectPackage: 'Selecciona un paquete',
    specialRequest: 'Solicitud especial',
    submitNote:
      'Al enviar, abriremos WhatsApp con tu solicitud. La reserva se confirma con el 50% de anticipo del paquete elegido.',
    submit: 'Enviar reserva por WhatsApp',
  },
  contact: {
    pageTitle: 'Contacto',
    subtitle: 'Contacto',
    title: 'Escríbenos, estamos para ayudarte',
    intro:
      '¿Dudas sobre un paquete, fechas o formas de pago? Escríbenos por WhatsApp o usa el formulario. Reservas con 50% de anticipo.',
    office: 'Oficina',
    phoneLabel: 'Teléfono / WhatsApp',
    writeUs: 'Escríbenos',
    subject: 'Asunto',
    message: 'Mensaje',
    sendWhatsapp: 'Enviar por WhatsApp',
  },
  footer: {
    tagline: 'Viajes diseñados para amar vivir',
    rights: 'Todos los derechos reservados.',
    help: 'Ayuda',
  },
  error: {
    title: 'Página no encontrada',
    breadcrumb: '404',
    heading: 'No encontramos esta página',
    text: 'Lo sentimos, la página que buscas no existe o fue movida. Vuelve al inicio o explora nuestros paquetes por Ecuador.',
    home: 'Ir al inicio',
    packages: 'Ver paquetes',
  },
  whatsapp: {
    general: 'Hola Deluxe Travel, quiero información sobre sus paquetes.',
    contact: 'Hola Deluxe Travel, quiero contactarlos.',
    aboutTours: 'Hola Deluxe Travel, quiero conocer sus tours.',
    bookTour:
      'Hola Deluxe Travel, quiero reservar: {title} ({duration}) — {price} USD por persona. Confirmo mi cupo con el 50% de anticipo ({deposit} USD).',
    bookingHeader: 'Hola Deluxe Travel, quiero reservar un tour:',
    bookingDepositFixed: 'Confirmo mi cupo con el 50% de anticipo ({deposit} USD).',
    bookingDepositGeneric: 'Confirmo mi cupo con el 50% de anticipo del paquete.',
    bookingContact: 'Contacto: {phone}',
    fieldName: 'Nombre',
    fieldEmail: 'Correo',
    fieldDate: 'Fecha preferida',
    fieldPackage: 'Paquete',
    fieldRequest: 'Solicitud especial',
    contactFormHello: 'Hola Deluxe Travel,',
    fieldSubject: 'Asunto',
    fieldMessage: 'Mensaje',
  },
  destinations: Object.fromEntries(
    DESTINATION_POINTS.map((p) => [
      p.slug,
      { name: p.name, region: p.region },
    ])
  ),
  tours: toursFromBase(),
}

export default es
