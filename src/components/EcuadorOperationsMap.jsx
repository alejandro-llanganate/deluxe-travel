import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { DESTINATION_POINTS, HUB } from '../data/destinationsMap'
import { tours } from '../data/tours'

const ecuadorBounds = [
  [-5.2, -81.5],
  [1.6, -75.0],
]

const hubIcon = L.divIcon({
  className: 'map-marker-hub',
  html: '<span class="map-pin map-pin-hub"><i class="fa fa-home"></i></span>',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
})

const destIcon = L.divIcon({
  className: 'map-marker-dest',
  html: '<span class="map-pin map-pin-dest"></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
})

const destIconActive = L.divIcon({
  className: 'map-marker-dest map-marker-dest-active',
  html: '<span class="map-pin map-pin-dest map-pin-active"></span>',
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -34],
})

function getTour(slug) {
  return tours.find((t) => t.slug === slug)
}

export default function EcuadorOperationsMap() {
  const [activeSlug, setActiveSlug] = useState(DESTINATION_POINTS[0].slug)

  const routeLine = useMemo(
    () => [
      [HUB.lat, HUB.lng],
      ...DESTINATION_POINTS.map((p) => [p.lat, p.lng]),
    ],
    []
  )

  const activePoint = DESTINATION_POINTS.find((p) => p.slug === activeSlug)
  const activeTour = activePoint ? getTour(activePoint.slug) : null

  return (
    <section className="container-xxl py-5 ecuador-map-section bg-light">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-light text-center text-primary px-3">
            Cobertura
          </h6>
          <h2 className="mb-3">Mapa de operaciones en Ecuador</h2>
          <p className="text-muted mb-5 mx-auto" style={{ maxWidth: 680 }}>
            Todos nuestros paquetes salen desde Quito y te llevan a destinos
            reales que operamos hoy. Explora el mapa y elige tu próxima aventura.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.15s">
            <div className="ecuador-map-wrap rounded shadow">
              <MapContainer
                bounds={ecuadorBounds}
                scrollWheelZoom={false}
                className="ecuador-leaflet-map"
                attributionControl
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Polyline
                  positions={routeLine}
                  pathOptions={{
                    color: '#F27127',
                    weight: 2,
                    opacity: 0.35,
                    dashArray: '8 10',
                  }}
                />
                <Marker position={[HUB.lat, HUB.lng]} icon={hubIcon}>
                  <Popup>
                    <strong>{HUB.name}</strong>
                    <br />
                    {HUB.subtitle}
                  </Popup>
                </Marker>
                {DESTINATION_POINTS.map((point) => (
                  <Marker
                    key={point.slug}
                    position={[point.lat, point.lng]}
                    icon={
                      point.slug === activeSlug ? destIconActive : destIcon
                    }
                    eventHandlers={{
                      click: () => setActiveSlug(point.slug),
                    }}
                  >
                    <Popup>
                      <strong>{point.name}</strong>
                      <br />
                      {point.region}
                      <br />
                      <Link to={`/tours/${point.slug}`}>Ver paquete</Link>
                    </Popup>
                  </Marker>
                ))}
                <CircleMarker
                  center={[HUB.lat, HUB.lng]}
                  radius={28}
                  pathOptions={{
                    color: '#F27127',
                    fillColor: '#F27127',
                    fillOpacity: 0.08,
                    weight: 1,
                  }}
                />
              </MapContainer>
              <div className="ecuador-map-legend">
                <span>
                  <i className="map-legend-dot map-legend-hub" /> Quito — base
                </span>
                <span>
                  <i className="map-legend-dot map-legend-dest" /> Destinos activos
                </span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.25s">
            <div className="ecuador-map-sidebar h-100">
              <h5 className="text-primary mb-3">Destinos que operamos</h5>
              <ul className="list-unstyled ecuador-dest-list mb-4">
                {DESTINATION_POINTS.map((point) => {
                  const tour = getTour(point.slug)
                  return (
                    <li key={point.slug}>
                      <button
                        type="button"
                        className={`ecuador-dest-btn w-100 text-start ${
                          activeSlug === point.slug ? 'active' : ''
                        }`}
                        onClick={() => setActiveSlug(point.slug)}
                      >
                        <span className="ecuador-dest-dot" />
                        <span>
                          <strong>{point.name}</strong>
                          <small className="d-block text-muted">
                            {point.region}
                          </small>
                        </span>
                        {tour && (
                          <span className="ecuador-dest-price">
                            ${tour.price}
                          </span>
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>

              {activeTour && activePoint && (
                <div className="ecuador-map-detail rounded">
                  {activeTour.image && (
                    <img
                      src={activeTour.image}
                      alt={activeTour.title}
                      className="w-100 rounded-top"
                      style={{ height: 120, objectFit: 'cover' }}
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="p-3">
                    <h6 className="mb-1">{activeTour.title}</h6>
                    <p className="small text-muted mb-2">{activeTour.subtitle}</p>
                    <p className="small mb-3">
                      {activeTour.durationShort} · Desde {activeTour.departure}
                    </p>
                    <Link
                      to={`/tours/${activeTour.slug}`}
                      className="btn btn-primary btn-sm rounded-pill w-100"
                    >
                      Ver paquete
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
