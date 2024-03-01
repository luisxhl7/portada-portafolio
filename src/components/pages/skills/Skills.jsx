import React from 'react'
import skillList from '../../../data/dataSkills';
import { CardSkills } from '../../molecules/card-skills/CardSkills';
import './Skills.scss'

export const Skills = () => {
  const isthemeDark = JSON.parse(localStorage.getItem('themeDark'))

  return (
    <div className={`skills ${isthemeDark ? '--dark' : ''}`}>
      <div className='skills__body'>
        <h1 className='skills__title'>
          Mis Habilidades
        </h1>
        <div className='skills__content'>
          {skillList.map( (item, idx) => (
            <CardSkills
              key={idx}
              name={item.name}
              image={item.image}
              isthemeDark={isthemeDark}
              className={item?.className}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
