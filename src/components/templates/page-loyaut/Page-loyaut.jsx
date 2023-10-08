import React from 'react'
import './Page-loyaout.scss'
import { Navbar } from '../../oganisms/navbar/Navbar'
import { useLocation } from 'react-router-dom';

export const PageLoyaut = ({children}) => {
  let {pathname} = useLocation();
  return (
    <main className={`PageLoyaut ${pathname !== '/home' ? '--extra-padding': ''}`}>
      {pathname !== '/home' &&
        <Navbar/>
      }
      <section>
        {children}
      </section>
    </main>
  )
}