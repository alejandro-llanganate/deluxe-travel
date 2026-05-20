import React from 'react'
import PageHero from '../components/PageHero'
import AboutContent from '../components/AboutContent'
import TeamSection from '../components/TeamSection'
import { useI18n } from '../i18n/LanguageContext'

function About() {
  const { t } = useI18n()

  return (
    <div>
      <PageHero
        title={t('about.pageTitle')}
        breadcrumbs={[
          { label: t('common.breadcrumbHome'), to: '/' },
          { label: t('about.pageTitle') },
        ]}
      />
      <div className="container-xxl py-5">
        <div className="container">
          <AboutContent showCta={false} />
        </div>
      </div>
      <TeamSection />
    </div>
  )
}

export default About
