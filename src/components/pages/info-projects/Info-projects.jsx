import React from 'react'
import projectsList from '../../../data/projectsList'
import { useParams } from 'react-router-dom';
import { SimpleSlider } from '../../atoms/simpleSlider';
import { images } from '../../../assets/image';
import './Info-projects.scss'
import { LightButton } from '../../atoms/light-button';

const esto = [images.vista_contact_x, images.vista_my_budget, images.vista_my_budget, images.vista_my_music_app, images.vista_my_pokedex]
const customSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  accessibility: false,
  responsive: [
    {
      breakpoint: 668,
      settings: {
        centerMode: false,
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 968,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1753,
      arrows: false,

      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

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

          <LightButton repoGit={result[0]?.repoGit}  title={result[0]?.title}/>

          {/* <div className='info-Portafolio-page__content-carousel'>
            <SimpleSlider customSettings={customSettings}>
              {esto.map((item) => (
                <div className='info-Portafolio-page__content-card' key={item}>
                  <img src={item} alt="" />
                </div>
              ))}
            </SimpleSlider>
          </div> */}
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
