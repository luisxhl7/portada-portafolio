import React from 'react'
import projectsList from '../../../data/projectsList'
import {CardBriefcase} from '../../molecules/card-briefcase'
import './Briefcase.scss'

export const Briefcase = ({theme}) => {

  return (
    <div className={`briefcase ${theme ? '--dark' : ''}`}>
      <div className={`briefcase__content-info ${theme ? '--dark' : ''}`}>
        <h1 className={`briefcase__title ${theme ? '--dark' : ''}`}>
          Conoce un poco de mis proyectos
        </h1>
        <div className='briefcase__content'>
          {projectsList.map( (item, idx) => (
            <CardBriefcase
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
              theme={theme}
              url={item.url}
              technologies={item.technologies}
              nameLink={item.nameLink}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
