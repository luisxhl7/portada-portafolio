import React from 'react'
import { NavLink } from 'react-router-dom'
import './CardBriefcase.scss'

export const CardBriefcase = ({image, title, description, theme, url, technologies, nameLink}) => {
    
    return (
        <div className={`card-briefcase ${theme ? '--dark' : ''}`}>
            <div className='card-briefcase__content-image'>
                <img 
                    src={image}
                    alt={title}
                    title={title}
                    className='card-briefcase__image'
                    width= '280px'
                    height= '140px'
                    loading='lazy'
                />

                <div className='card-briefcase__description-tools'>
                    {technologies.map( (item, idx) => (
                        <img 
                            key={idx}
                            src={item?.image} 
                            alt={item?.name}
                            title={item?.name}
                            width={50} 
                            height={50}
                        />
                    ))}
                </div>

            </div>
            <h2 className='card-briefcase__title'>{title}</h2>
            <p className='card-briefcase__description'>
                {description}
            </p>
            <div className='card-briefcase__content-buttons'>
                {/* <NavLink 
                    to={`/portafolio/${nameLink}`}
                    title={`Conoce ${title}`}
                    className={theme ? '--darkBtn' : ''}
                >
                    Info
                </NavLink> */}
                <a 
                    href={url}
                    target="_blank" 
                    rel='noreferrer'
                    title={`Visita ${title}`}
                    className={theme ? '--darkBtn' : ''}
                >
                    Demo
                </a>

            </div>
        </div>
    )
}
