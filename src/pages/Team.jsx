import React from 'react'
import PageHero from '../components/PageHero'
import TeamSection from '../components/TeamSection'
import { useI18n } from '../i18n/LanguageContext'

export default function Team() {
  const { t } = useI18n()

  return (
    <div>
      <PageHero
        title={t('team.pageTitle')}
        breadcrumbs={[
          { label: t('common.breadcrumbHome'), to: '/' },
          { label: t('team.pageTitle') },
        ]}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              {t('team.subtitle')}
            </h6>
            <h1 className="mb-4">{t('team.pageTitle')}</h1>
            <p className="mb-5 mx-auto text-muted" style={{ maxWidth: 620 }}>
              {t('team.pageIntro')}
            </p>
          </div>
        </div>
      </div>
      <TeamSection showLink={false} />
    </div>
  )
}
