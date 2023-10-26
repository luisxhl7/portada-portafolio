import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navbar } from '../../oganisms/navbar'
import './Page-loyaout.scss'

export const PageLoyaut = ({children}) => {
  const isthemeDark = localStorage.getItem('themeDark') ? JSON.parse(localStorage.getItem('themeDark')) : localStorage.setItem('themeDark', true)
  let {pathname} = useLocation();


  return (
    <main className={`PageLoyaut`}>
      {pathname !== '/home' &&
        <Navbar isthemeDark={isthemeDark}/>
      }
      <section className={`PageLoyaut__setion ${isthemeDark ? '--dark' : ''}`}>
        {children}
      </section>
    </main>
  )
}