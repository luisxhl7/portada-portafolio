import React from 'react'
import skillList from '../../../data/dataSkills';
import { CardSkills } from '../../molecules/card-skills/CardSkills';
import './Skills.scss'

export const Skills = ({ theme }) => {

  return (
    <div className={`skills ${theme ? '--dark' : ''}`}>
      <div className='skills__body'>
        <h1 className={`skills__title ${theme ? '--dark' : ''}`}>
          Mis Habilidades
        </h1>
        <div className='skills__content'>
          {skillList.map( (item, idx) => (
            <CardSkills
              key={idx}
              name={item.name}
              image={item.image}
              theme={theme}
              className={item?.className}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
