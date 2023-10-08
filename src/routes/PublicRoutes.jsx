import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/home'
import { Briefcase } from '../components/pages/briefcase'
import { AboutMe } from '../components/pages/aboutme'
import { Skills } from '../components/pages/skills'
import { PageLoyaut } from '../components/templates/page-loyaut/Page-loyaut'

export const PublicRoutes = () => {
  return (
    <>
      <PageLoyaut>
        <Routes>
          <Route path = '/home'        element = { <Home/> }/>
          <Route path = '/portafolio'  element = { <Briefcase/> }/>
          <Route path = '/acercademi'  element = { <AboutMe/> }/>
          <Route path = '/habilidades' element = { <Skills/> }/>
          <Route path = '/'            element = { <Navigate to = '/home' /> }/>
          <Route path = '/*'           element = { <Navigate to = '/home' /> }/>
        </Routes>
      </PageLoyaut>
    </>
  )
}
