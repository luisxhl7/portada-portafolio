import React from 'react'
import { PublicRoutes } from '../../../routes/PublicRoutes'
import { PageLayout } from '../../templates/page-layout/Page-layout'

export const App = () => {
  return (
    <>
      <PageLayout>
        <PublicRoutes/>
      </PageLayout>
    </>
  )
}
