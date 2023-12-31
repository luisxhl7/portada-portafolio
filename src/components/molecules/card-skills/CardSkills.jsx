import React from 'react'
import './CardSkills.scss'

export const CardSkills = ({name, image, isthemeDark}) => {
    return (
        <div className='card-skills' title={name}>
            <div className='card-skills__content-images'>
                {isthemeDark &&
                    <div className='card-skills__portal'></div>
                }
                <figure
                    className={`card-skills__images ${isthemeDark ? '--dark' : '--light'}`}
                    title={name}
                >
                    <img
                        className={` ${isthemeDark ? '--dark' : '--light'}`}
                        src={image} 
                        alt={name}
                        title={name}
                    />
                </figure>
            </div>
            <h2 className='card-skills__title'>
                {name}
            </h2>
        </div>
    )
}
