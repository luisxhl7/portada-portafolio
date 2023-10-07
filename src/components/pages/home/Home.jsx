import { NavLink } from 'react-router-dom';
import './Home.scss'
import { RandomStars } from '../../molecules/randomStars';

export const Home = () =>  {
  return (
    <div className="home">
      <div className='home__description'>
        <h1 className='home__description__title'>
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

          </div>
        </div>
      </div>
      
      <RandomStars/>

    </div>
  );
}
