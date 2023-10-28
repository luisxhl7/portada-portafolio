import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {LocationOn} from '@mui/icons-material';
import { RandomStars } from '../../molecules/randomStars';
import { LinkedIn, GitHub } from '@mui/icons-material';
import './Home.scss'
export const Home = () =>  {

    useEffect(() => {
      const text = document.getElementById('animated-text');
      const letters = text.innerText.split('');
      text.innerText = '';
  
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.position = 'relative';
        span.style.animation = `move 1s ${index / 10}s forwards`;
        text.appendChild(span);
      });
    }, []);

  return (
    <div className="home">
      <div className='home__description'>
        <h1 className='home__description__title' id="animated-text">
          Luis Carlos Hernández López 
        </h1>
        <p className='home__description__text'>
          Desarrollador front-end
        </p>
        <p className='home__description__text'>
          <LocationOn/> Medellin, Colombia
        </p>
        <div className='home__description__networks'>
          <a 
            href="https://www.linkedin.com/in/luis-carlos-hern%C3%A1ndez-l%C3%B3pez-144a81289/" 
            title='LinkedIn'
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn/>
          </a>
          <a
            href="https://github.com/luisxhl7" 
            title='GitHub'
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub/>
          </a>
        </div>

        <div className='home__description__content-buttons'>
          <NavLink to={'/acercademi'} title='acerca de mi'>Acerca de mí</NavLink>
          <NavLink to={'/habilidades'} title='habilidades'>Habilidades</NavLink>
          <NavLink to={'/portafolio'} title='portafolio'>Portafolio</NavLink>
        </div>

      </div>
      <div className='home__esto'>
        <div className='home__content-moon'>
          <div className='home__moon'>
            <span className='home__moon__crater'></span>
            <span className='home__moon__crater'></span>
            <span className='home__moon__crater'></span>
            <span className='home__moon__crater'></span>
          </div>
        </div>
      </div>
      
      <RandomStars/>

    </div>
  );
}
