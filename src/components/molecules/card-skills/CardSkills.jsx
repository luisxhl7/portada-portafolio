import React from 'react'
import './CardSkills.scss'

export const CardSkills = ({name, image, isthemeDark}) => {
    return (
        <div className='card-skills'>
            <div className='card-skills__content-images'>
                {isthemeDark &&
                    <div className='card-skills__portal'></div>
                }
                <figure
                    className={`card-skills__images ${isthemeDark ? '--dark' : ''}`}
                    title={name}
                >
                    <img
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
