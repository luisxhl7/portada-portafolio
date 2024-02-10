import React from 'react'
import { CardBriefcase } from '../../molecules/card-briefcase'
import { RandomStars } from '../../molecules/randomStars'
import {images} from '../../../assets/image.js'
import './Briefcase.scss'

const proyectsList = [
  {
    image: images.vista_my_portafolio,
    title: 'Mi portafolio',
    description: 'mi portafolio me permite enseñar un poco sobre mi y mis proyectos personales',
    url:'https://main.d1682e8p58bvjn.amplifyapp.com/',
    technologies: [
      images.react,
      images.javaScript,
      images.sass,
      images.git,
      images.github,
      images.testing_library
    ]
  },
  {
    image: images.vista_my_music_app,
    title: 'My music app',
    description: 'Clon de Spotify: ¡Descubre mi proyecto de streaming de música utilizando la api de spotify!',
    url:'https://main.d3mrsqa2j7ln2g.amplifyapp.com/',
    technologies: [
      images.react,
      images.javaScript,
      images.sass,
      images.git,
      images.github,
      images.testing_library
    ]
  },
  {
    image: images.vista_my_store,
    title: 'My Store',
    description: 'My Store es una plataforma en línea diseñada para impulsar y promover el mercado de componentes para PC.',
    url:'https://main.d2ahtulm8ezp73.amplifyapp.com/home',
    technologies: [
      images.react,
      images.javaScript,
      images.sass,
      images.git,
      images.github,
      images.testing_library
    ]
  },
  {
    image: images.vista_my_pokedex,
    title: 'My Pokedex',
    description: 'La Pokédex es una guía esencial que proporciona información detallada sobre cada Pokémon, incluyendo sus características, habilidades, tipos y hábitats, en el mundo de Pokémon.',
    url:'https://main.d30pn9qle6t7yj.amplifyapp.com/',
    technologies: [
      images.react,
      images.javaScript,
      images.sass,
      images.git,
      images.github,
      images.testing_library
    ]
  },
  {
    image: images.vista_my_budget,
    title: 'My budget',
    description: 'My budget es una plataforma que te permite guardar de forma local todos tus ingresos y egresos teniendo un control y estadisticas de estas.',
    url:'https://main.d5rx12jyfmutf.amplifyapp.com/',
    technologies: [
      images.react,
      images.javaScript,
      images.sass,
      images.git,
      images.github,
      images.testing_library
    ]
  },
  {
    image: images.vista_contact_x,
    title: 'PostSphere',
    description: 'PostSphere es un proyecto de publicación en línea que facilita a los usuarios la creación y compartición de publicaciones breves y concisas',
    url:'https://main.d3f8bdovm54n3v.amplifyapp.com/home',
    technologies: [
      images.react,
      images.javaScript,
      images.sass,
      images.git,
      images.github,
      images.testing_library,
      images.awsImage
    ]
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
              technologies={item.technologies}
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
