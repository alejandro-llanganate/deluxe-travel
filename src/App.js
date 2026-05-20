import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Packages from './pages/Packages'
import Team from './pages/Team'
import Error from './pages/Error'
import Contact from './pages/Contact'
import TourDetail from './pages/TourDetail'

export default function App() {
  return (
    <div>
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/tours/:slug" element={<TourDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Navigate to="/#reservas" replace />} />
        <Route path="/destination" element={<Navigate to="/packages" replace />} />
        <Route
          path="/testimonial"
          element={<Navigate to="/#testimonios" replace />}
        />
        <Route path="/error" element={<Navigate to="/packages" replace />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
