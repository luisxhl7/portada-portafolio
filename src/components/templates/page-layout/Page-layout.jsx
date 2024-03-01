import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navbar } from '../../organisms/navbar'
import { RandomStars } from '../../molecules/randomStars';
import './Page-layout.scss'

export const PageLayout = ({children}) => {
  const isthemeDark = localStorage.getItem('themeDark') ? JSON.parse(localStorage.getItem('themeDark')) : localStorage.setItem('themeDark', true)
  let {pathname} = useLocation();
  return (
    <main className={`PageLayout ${isthemeDark ? '--dark' : ''}`}>
      {pathname !== '/home' &&
        <Navbar isthemeDark={isthemeDark}/>
      }
      <section className={`PageLayout__section ${isthemeDark ? '--dark' : ''} ${pathname === '/home' ? 'style-home' : ''}`}>
        {children}
      </section>
      {isthemeDark &&
        <RandomStars/>
      }
    </main>
  )
}