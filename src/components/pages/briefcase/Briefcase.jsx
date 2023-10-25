import React from 'react'
import { CardBriefcase } from '../../molecules/card-briefcase'
import { RandomStars } from '../../molecules/randomStars'
import {images} from '../../../assets/image.js'
import './Briefcase.scss'

const proyectsList = [
  {
    image: images.vista_my_music_app,
    title: 'My music app',
    description: 'Clon de Spotify: ¡Descubre mi proyecto de streaming de música utilizando la api de spotify!',
    url:'https://main.d3mrsqa2j7ln2g.amplifyapp.com/'
  },
  {
    image: images.vista_contact_x,
    title: 'PostSphere',
    description: 'PostSphere es un proyecto de publicación en línea que facilita a los usuarios la creación y compartición de publicaciones breves y concisas',
    url:'https://main.d3f8bdovm54n3v.amplifyapp.com/home'
  },
  {
    image: images.vista_my_music_app,
    title: 'Xx xx xxxx xxx',
    description: 'Xxxxxx xxx xxx xx  xxxxxxxxx xxx xxxx xxxxx xxxxxxxxx xxxxxxx',
    url:'https://main.d3mrsqa2j7ln2g.amplifyapp.com/'
  },
]

export const Briefcase = () => {
  const isthemeDark = JSON.parse(localStorage.getItem('themeDark'))

  return (
    <div className={`briefcase ${isthemeDark ? '--dark' : ''}`}>
      <div className={`briefcase__content-info ${isthemeDark ? '--dark' : ''}`}>
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
              url={item.url}
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
