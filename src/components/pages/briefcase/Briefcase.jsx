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
    title: 'Contact X',
    description: 'Contact-X cuenta con un crud desarollado utilizando serverless y lambdas de aws con la finalidad de permitir registrar contactos',
    url:'http://contact-x.s3-website-us-east-1.amazonaws.com'
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
