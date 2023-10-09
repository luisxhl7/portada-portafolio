import React from 'react'
import { CardBriefcase } from '../../molecules/card-briefcase/CardBriefcase'
import esto from '../../../assets/vista-my-music-app.png'
import './Briefcase.scss'

const proyectsList = [
  {
    image: esto,
    title: 'My music app',
    description: 'Clon de Spotify: ¡Descubre mi proyecto de streaming de música utilizando la api de spotify!',
  },
  {
    image: esto,
    title: 'Xx xx xxxx xxx',
    description: 'Xxxxxx xxx xxx xx  xxxxxxxxx xxx xxxx xxxxx xxxxxxxxx xxxxxxx',
  },
  {
    image: esto,
    title: 'Xx xx xxxx xxx',
    description: 'Xxxxxx xxx xxx xx  xxxxxxxxx xxx xxxx xxxxx xxxxxxxxx xxxxxxx',
  },
]

export const Briefcase = () => {
  const isthemeDark = JSON.parse(localStorage.getItem('themeDark'))

  return (
    <>
      <div className={`briefcase ${isthemeDark ? '--dark' : ''}`}>
        <h1 className={`briefcase__title ${isthemeDark ? '--dark' : ''}`}>
          Conoce un poco de mis proyectos
        </h1>
        <div className='briefcase__content'>
          {proyectsList.map( (item, idx) => (
            <CardBriefcase
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
              isthemeDark={isthemeDark}
            />
          ))}
        </div>
      </div>
    </>
  )
}
