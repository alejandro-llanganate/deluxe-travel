import React from 'react'
import { useI18n } from '../i18n/LanguageContext'

const ICONS = ['fa-globe', 'fa-dollar-sign', 'fa-plane']

export default function ProcessSection() {
  const { t } = useI18n()
  const steps = t('process.steps')

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            {t('process.subtitle')}
          </h6>
          <h1 className="mb-5">{t('process.title')}</h1>
        </div>
        <div className="row gy-5 gx-4 justify-content-center">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay={`${0.1 + i * 0.2}s`}
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className={`fa ${ICONS[i]} fa-3x text-white`} />
                </div>
                <h5 className="mt-4">{step.title}</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
