import React from 'react'
import './Skills.scss'

export const Skills = () => {
  const isthemeDark = JSON.parse(localStorage.getItem('themeDark'))

  return (
    <>
      <div className={`skills ${isthemeDark ? '--dark' : ''}`}>
        <h1 className='skills__title'>
          Mis Habilidades
        </h1>
      </div>
    </>
  )
}
