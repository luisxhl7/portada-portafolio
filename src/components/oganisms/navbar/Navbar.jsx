import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import {Brightness4} from '@mui/icons-material';

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar__content-links'>
                <NavLink 
                    to={'/home'}
                    className={({isActive}) => `navbar__description ${isActive ? '--active' : ''}`}
                >
                    Home
                </NavLink>
                <NavLink
                    to={'/acercademi'}
                    className={({isActive}) => `navbar__description ${isActive ? '--active' : ''}`}
                >
                    Acerca de mí
                </NavLink>
                <NavLink 
                    to={'/habilidades'}
                    className={({isActive}) => `navbar__description ${isActive ? '--active' : ''}`}
                >
                    Habilidades
                </NavLink>
                <NavLink 
                    to={'/portafolio'}
                    className={({isActive}) => `navbar__description ${isActive ? '--active' : ''}`}
                >
                    Portafolio
                </NavLink>
            </div>
            <Brightness4 className='navbar__icon-tema'/>
        </nav>
    )
}
