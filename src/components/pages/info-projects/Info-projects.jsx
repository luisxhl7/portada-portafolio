import React from 'react'
import projectsList from '../../../data/projectsList'
import { useParams } from 'react-router-dom';
import './Info-projects.scss'


export const InfoProjects = ({theme}) => {
  const {id} = useParams()
  const result = projectsList?.filter(project => project.nameLink === id);

  return (
    <>
      {result[0]?.nameLink ?
        <div className={`info-Portafolio-page ${theme ? '--dark' : ''}`}>
          <figure className='info-Portafolio-page__content-image'>
            <img src={result[0]?.image} alt={result[0]?.title} title={result[0]?.title} />
          </figure>
          
          <h1 className='info-Portafolio-page__title'>
            {result[0]?.title}
          </h1>
          <p className='info-Portafolio-page__description'>
            {result[0]?.extendedDescription}
          </p>

          <div className='info-Portafolio-page__content-methodologies-and-tools'>
            <div>
              <h2>herramientas:</h2>
              <ul>
                {result[0]?.tools.map( (item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Metodologias:</h2>
              <ul>
                {result[0]?.Methodologies.map( (item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        :
        <div className={`info-Portafolio-page-not-found ${theme ? '--dark' : ''}`}>
          <h1>NOT FOUND</h1>
          <a href="/portafolio" className={theme ? '--dark' : ''}>Volver</a>
        </div>
      }
    </>
  )
}
