import React from 'react'
import './CardBriefcase.scss'
import { images } from '../../../assets/image'

export const CardBriefcase = ({image, title, description}) => {
    return (
        <div className='card-briefcase'>
            <div className='card-briefcase__content-image'>
                <img 
                    src={image}
                    alt="spotify"
                    title='spotify'
                    className='card-briefcase__image'
                />

                <div className='card-briefcase__description-tools'>
                    <img 
                        src={images.react} 
                        alt="React js"
                        title='React js' 
                        width={50} 
                        height={50}
                    />
                    <img 
                        src={images.javaScript} 
                        alt="javaScript"
                        title='javaScript' 
                        width={50} 
                        height={50}
                    />
                    <img 
                        src={images.sass} 
                        alt="Sass"
                        title='Sass' 
                        width={50} 
                        height={50}
                    />
                    <img 
                        src={images.git} 
                        alt="Git"
                        title='Git' 
                        width={70} 
                        height={70}
                    />
                    <img 
                        src={images.github} 
                        alt="Git Hub"
                        title='Git Hub' 
                        width={50} 
                        height={50}
                    />
                    <img 
                        src={images.testing_library} 
                        alt="testing Library"
                        title='testing Library' 
                        width={50} 
                        height={50}
                    />
                </div>

            </div>
            <a href="https://deu63jgjvax3a.cloudfront.net/">
                <h3 className='card-briefcase__title'>{title}</h3>
            </a>
            <p className='card-briefcase__description'>
                {description}
            </p>
        </div>
    )
}
