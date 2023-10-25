import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RandomStars } from '../../molecules/randomStars';
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
          Medellin, Colombia
        </p>

        <div className='home__description__content-buttons'>
          <NavLink to={'/acercademi'}>Acerca de mí</NavLink>
          <NavLink to={'/habilidades'}>Habilidades</NavLink>
          <NavLink to={'/portafolio'}>Portafolio</NavLink>
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
