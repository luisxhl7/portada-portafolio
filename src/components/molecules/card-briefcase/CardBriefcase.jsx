import React from 'react'
import './CardBriefcase.scss'

export const CardBriefcase = ({image, title, description, isthemeDark, url, technologies}) => {
    const stilo = {
        margin: '10px',
    }
    return (
        <a 
            href={url}
            target="_blank" 
            rel='noreferrer'
            style={stilo}
            title={`Conoce ${title}`}
        >
            <div className={`card-briefcase ${isthemeDark ? '--dark' : ''}`}>
                <div className='card-briefcase__content-image'>
                    <img 
                        src={image}
                        alt={title}
                        title={title}
                        className='card-briefcase__image'
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
                <h3 className='card-briefcase__title'>{title}</h3>
                <p className='card-briefcase__description'>
                    {description}
                </p>
            </div>
        </a>
    )
}
