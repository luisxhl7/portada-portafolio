import React from 'react'
import { CardBriefcase } from '../../molecules/card-briefcase/CardBriefcase'
import viewMyMusicApp from '../../../assets/vista-my-music-app.png'
import viewConactX from '../../../assets/vista-Contact-X.png'
import './Briefcase.scss'

const proyectsList = [
  {
    image: viewMyMusicApp,
    title: 'My music app',
    description: 'Clon de Spotify: ¡Descubre mi proyecto de streaming de música utilizando la api de spotify!',
    url:'https://main.d3mrsqa2j7ln2g.amplifyapp.com/'
  },
  {
    image: viewConactX,
    title: 'PostSphere',
    description: 'PostSphere es un proyecto de publicación en línea que facilita a los usuarios la creación y compartición de publicaciones breves y concisas',
    url:'https://main.d3f8bdovm54n3v.amplifyapp.com/home'
  },
  {
    image: viewMyMusicApp,
    title: 'Xx xx xxxx xxx',
    description: 'Xxxxxx xxx xxx xx  xxxxxxxxx xxx xxxx xxxxx xxxxxxxxx xxxxxxx',
    url:'https://main.d3mrsqa2j7ln2g.amplifyapp.com/'
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
              url={item.url}
            />
          ))}
        </div>
      </div>
    </>
  )
}
