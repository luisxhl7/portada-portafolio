import React from 'react'
import './Page-loyaout.scss'
import { Navbar } from '../../oganisms/navbar/Navbar'
import { useLocation } from 'react-router-dom';

export const PageLoyaut = ({children}) => {
  const isthemeDark = JSON.parse(localStorage.getItem('themeDark'))
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