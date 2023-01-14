import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { CaretRight } from 'phosphor-react'
import { PhosphorIcon, Routes } from 'types'

type BreadcrumbProps = {
  icon: PhosphorIcon
  label: string
}

const Breadcrumb = ({ icon: Icon, label }: BreadcrumbProps) => {
  const { pathname } = useLocation()

  const paths = pathname.replace(/^\//, '').split(/\//g)
  const hasPaths = pathname !== '/'

  const getFullPath = (index: number) => {
    let currentIndex = 0
    let path = `/${paths[0]}`

    while (currentIndex < index) {
      currentIndex = index

      path = `${path}/${paths[currentIndex]}`
    }

    return path
  }

  return (
    <div className="flex flex-col gap-4">
      {hasPaths && (
        <div className="flex items-center gap-4">
          <Link to={Routes.HOME}>
            Home
          </Link>

          {paths.map((path, index) => {
            const isLast = index === (paths.length - 1)

            return (
              <React.Fragment key={path}>
                <CaretRight />

                {!isLast && (<Link to={getFullPath(index)}>{path}</Link>)}

                {isLast && (<span>{path}</span>)}
              </React.Fragment>
            )
          })}
        </div>
      )}

      <div className="flex items-center gap-3">
        <Icon size={36} />

        <h1 className="text-4xl">{label}</h1>
      </div>
    </div>
  )
}

export { Breadcrumb }
