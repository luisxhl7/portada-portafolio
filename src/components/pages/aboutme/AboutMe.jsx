import React from 'react'
import './AboutMe.scss'

export const AboutMe = () => {
    const isthemeDark = JSON.parse(localStorage.getItem('themeDark'))

    return (
        <div className={`AboutMe ${isthemeDark ? '--dark' : ''}`}>
            <h1 className='AboutMe__title'>
                Acerca de mí
            </h1>
        </div>
    )
}
