import React, { useEffect, useState } from 'react'
import { Brightness4, Menu, Close } from '@mui/icons-material';
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

export const Navbar = ({theme, toggleTheme}) => {
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

    const handleOpenMenu = () => {
        if (screenSize <= 761) {
            if (isOpenMenu) {
                setIsOpenMenu(false)
            }else{
                setIsOpenMenu(true)
            }
        }
    }

    return (
        <>
            {screenSize >= 761  ?
                <nav 
                    className={`navbar ${theme ? '--dark' : ''}`} 
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
                        onClick={toggleTheme}
                        className='navbar__icon-tema'
                        title={theme ? 'modo dia' : 'modo noche'}
                    >
                        <Brightness4/>
                    </button>
                </nav>
                :
                <nav
                    className={`navbar-mobile ${isOpenMenu ? '--isOpen' : ''} ${theme ? '--dark' : ''}`} 
                >
                    <span className='navbar-mobile__content-icon' onClick={handleOpenMenu}>
                        {isOpenMenu ?
                            <Close className={`navbar-mobile__icon ${isOpenMenu ? '--isOpen' : ''} ${theme ? '--dark' : ''}`}/>
                            :
                            <Menu className={`navbar-mobile__icon ${isOpenMenu ? '--isOpen' : ''} ${theme ? '--dark' : ''}`}/>
                        }
                    </span>
                    {isOpenMenu &&
                    <>
                        <div className='navbar-mobile__content-links'>
                            <NavLink 
                                to={'/home'}
                                className={({isActive}) => `navbar-mobile__description ${isActive ? '--active' : ''} ${theme ? '--dark' : ''}`}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to={'/acercademi'}
                                onClick={handleOpenMenu}
                                className={({isActive}) => `navbar-mobile__description ${isActive ? '--active' : ''} ${theme ? '--dark' : ''}`}
                            >
                                Acerca de mí
                            </NavLink>
                            <NavLink 
                                to={'/habilidades'}
                                onClick={handleOpenMenu}
                                className={({isActive}) => `navbar-mobile__description ${isActive ? '--active' : ''} ${theme ? '--dark' : ''}`}
                            >
                                Habilidades
                            </NavLink>
                            <NavLink 
                                to={'/portafolio'}
                                onClick={handleOpenMenu}
                                className={({isActive}) => `navbar-mobile__description ${isActive ? '--active' : ''} ${theme ? '--dark' : ''}`}
                            >
                                Portafolio
                            </NavLink>
                        </div>
                        <button 
                            onClick={toggleTheme}
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
