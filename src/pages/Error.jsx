import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useI18n } from '../i18n/LanguageContext'

function Error() {
  const { t } = useI18n()

  return (
    <div>
      <PageHero
        title={t('error.title')}
        breadcrumbs={[
          { label: t('common.breadcrumbHome'), to: '/' },
          { label: t('error.breadcrumb') },
        ]}
      />
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary" />
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">{t('error.heading')}</h1>
              <p className="mb-4">{t('error.text')}</p>
              <Link
                to="/"
                className="btn btn-primary rounded-pill py-3 px-5 me-2"
              >
                {t('error.home')}
              </Link>
              <Link
                to="/packages"
                className="btn btn-outline-primary rounded-pill py-3 px-5"
              >
                {t('error.packages')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
