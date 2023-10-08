import React from 'react'
import { CardBriefcase } from '../../molecules/card-briefcase/CardBriefcase'
import esto from '../../../assets/vista-my-music-app.png'
import './Briefcase.scss'

const proyectsList = [
  {
    image: esto,
    title: 'My music app',
    description: 'Clon de Spotify: ¡Descubre mi proyecto de streaming de música!',
  },
  {
    image: esto,
    title: 'My music app',
    description: 'Clon de Spotify: ¡Descubre mi proyecto de streaming de música!',
  },
  {
    image: esto,
    title: 'My music app',
    description: 'Clon de Spotify: ¡Descubre mi proyecto de streaming de música!',
  },
]

export const Briefcase = () => {
  return (
    <>
      <h1>Conoce un poco de mis proyectos</h1>
      <div className='briefcase'>
        {proyectsList.map( (item, idx) => (
          <CardBriefcase
            key={idx}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    
    </>
  )
}
