import React from 'react'
import { RandomStars } from '../../molecules/randomStars/RandomStars';
import { CardSkills } from '../../molecules/card-skills/CardSkills';
import { images } from "../../../assets/image";
import './Skills.scss'

const skillList = [
  {
    image: images.html,
    name: 'Html',
  },
  {
    image: images.css,
    name: 'Css',
  },
  {
    image: images.javaScript,
    name: 'JavaScript',
  },
  {
    image: images.react,
    name: 'React',
  },
  {
    image: images.sass,
    name: 'Sass',
  },
  {
    image: images.testing_library,
    name: 'Testing Library',
  },
  {
    image: images.git,
    name: 'Git',
  },
  {
    image: images.github,
    name: 'GitHub',
    className: '--filter-gitHub',
  },
  {
    image: images.typeScript,
    name: 'TypeScript',
  },
  {
    image: images.awsImage,
    name: 'AWS Amazon',
  },
]

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
      {isthemeDark &&
        <RandomStars/>
      }
    </div>
  )
}
