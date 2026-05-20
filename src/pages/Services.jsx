import React from 'react'
import PageHero from '../components/PageHero'
import ServicesSection from '../components/ServicesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import { useI18n } from '../i18n/LanguageContext'

function Services() {
  const { t } = useI18n()

  return (
    <div>
      <PageHero
        title={t('services.pageTitle')}
        breadcrumbs={[
          { label: t('common.breadcrumbHome'), to: '/' },
          { label: t('services.pageTitle') },
        ]}
      />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  )
}

export default Services
