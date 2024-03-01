import React from 'react'
import projectsList from '../../../data/projectsList'
import {CardBriefcase} from '../../molecules/card-briefcase'
import './Briefcase.scss'

export const Briefcase = () => {
  const isthemeDark = JSON.parse(localStorage.getItem('themeDark'))

  return (
    <div className={`briefcase ${isthemeDark ? '--dark' : ''}`}>
      <div className={`briefcase__content-info ${isthemeDark ? '--dark' : ''}`}>
        <h1 className={`briefcase__title ${isthemeDark ? '--dark' : ''}`}>
          Conoce un poco de mis proyectos
        </h1>
        <div className='briefcase__content'>
          {projectsList.map( (item, idx) => (
            <CardBriefcase
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
              isthemeDark={isthemeDark}
              url={item.url}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
