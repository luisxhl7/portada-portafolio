import React from 'react'
import { NavLink } from 'react-router-dom'
import {Brightness4} from '@mui/icons-material';
import './Navbar.scss'

export const Navbar = ({isthemeDark}) => {

    const handleChangeTheme = () => {
        if (JSON.parse(localStorage.getItem('themeDark'))) {
            localStorage.setItem('themeDark', false)
            window.location.reload()
        }else{
            localStorage.setItem('themeDark', true)
            window.location.reload()
        }
    }

    return (
        <nav className={`navbar ${isthemeDark ? '--dark' : ''}`}>
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
            <button 
                onClick={handleChangeTheme}
                className='navbar__icon-tema'
            >
                <Brightness4/>
            </button>
        </nav>
    )
}
