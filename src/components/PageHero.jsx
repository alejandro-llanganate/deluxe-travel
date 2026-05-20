import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHero({ title, breadcrumbs = [] }) {
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">{title}</h1>
            {breadcrumbs.length > 0 && (
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  {breadcrumbs.map((item, i) => (
                    <li
                      key={item.label}
                      className={`breadcrumb-item${
                        i === breadcrumbs.length - 1 ? ' text-white active' : ''
                      }`}
                      aria-current={i === breadcrumbs.length - 1 ? 'page' : undefined}
                    >
                      {item.to ? (
                        <Link to={item.to}>{item.label}</Link>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
