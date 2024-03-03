import React from 'react'
import './CardSkills.scss'

export const CardSkills = ({name, image, theme}) => {
    return (
        <div className='card-skills' title={name}>
            <div className='card-skills__content-images'>
                {theme &&
                    <div className='card-skills__portal'></div>
                }
                <figure
                    className={`card-skills__images ${theme ? '--dark' : '--light'}`}
                    title={name}
                >
                    <img
                        className={` ${theme ? '--dark' : '--light'}`}
                        src={image} 
                        alt={name}
                        title={name}
                        width={100}
                        height={100}
                        loading='lazy'
                    />
                </figure>
            </div>
            <h2 className='card-skills__title'>
                {name}
            </h2>
        </div>
    )
}
