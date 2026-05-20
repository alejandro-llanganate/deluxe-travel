import React from 'react'
import PageHero from '../components/PageHero'
import TourGrid from '../components/TourGrid'
import { useI18n } from '../i18n/LanguageContext'

export default function Packages() {
  const { t } = useI18n()

  return (
    <div>
      <PageHero
        title={t('packages.pageTitle')}
        breadcrumbs={[
          { label: t('common.breadcrumbHome'), to: '/' },
          { label: t('packages.pageTitle') },
        ]}
      />
      <TourGrid
        subtitle={t('packages.subtitle')}
        title={t('packages.pageHeroTitle')}
      />
    </div>
  )
}
