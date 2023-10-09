import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Brightness4,Menu} from '@mui/icons-material';
import './Navbar.scss'

export const Navbar = ({isthemeDark}) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
    const handleChangeTheme = () => {
        if (JSON.parse(localStorage.getItem('themeDark'))) {
            localStorage.setItem('themeDark', false)
            window.location.reload()
        }else{
            localStorage.setItem('themeDark', true)
            window.location.reload()
        }
    }

    const handleOpenMenu = () => {
        if (screenSize <= 768) {
            if (isOpenMenu) {
                setIsOpenMenu(false)
            }else{
                setIsOpenMenu(true)
            }
        }
    }

    return (
        <>
        {screenSize >= 768  ?
            <nav 
                className={`navbar ${isthemeDark ? '--dark' : ''}`} 
            >
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
            :
            <nav
                className={`navbar-mobile ${isOpenMenu ? '--isOpen' : ''} ${isthemeDark ? '--dark' : ''}`} 
                onClick={handleOpenMenu}
            >
                <span className='navbar-mobile__content-icon'>
                    <Menu className={`navbar-mobile__icon ${isOpenMenu ? '--isOpen' : ''} ${isthemeDark ? '--dark' : ''}`}/>
                </span>
                {isOpenMenu &&
                <>
                    <div className='navbar-mobile__content-links'>
                        <NavLink 
                            to={'/home'}
                            className={({isActive}) => `navbar-mobile__description ${isActive ? '--active' : ''}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={'/acercademi'}
                            className={({isActive}) => `navbar-mobile__description ${isActive ? '--active' : ''}`}
                        >
                            Acerca de mí
                        </NavLink>
                        <NavLink 
                            to={'/habilidades'}
                            className={({isActive}) => `navbar-mobile__description ${isActive ? '--active' : ''}`}
                        >
                            Habilidades
                        </NavLink>
                        <NavLink 
                            to={'/portafolio'}
                            className={({isActive}) => `navbar-mobile__description ${isActive ? '--active' : ''}`}
                        >
                            Portafolio
                        </NavLink>
                    </div>
                    <button 
                        onClick={handleChangeTheme}
                        className='navbar-mobile__icon-tema'
                    >
                        <Brightness4/>
                    </button>
                </>
                }
            </nav>
        }
        </>
    )
}
