import React from 'react';
import imageUser from "../../../assets/imagen-luis.png";
import pdf from '../../../../src/downLoad/cv-Luis-Carlos-Hernandez-Lopez.pdf';
import './AboutMe.scss';


export const AboutMe = ({ theme }) => {

    return (
        <div className={`aboutMe ${theme ? '--dark' : ''}`}>
            <div className={`aboutMe__content-info ${theme ? '--dark' : ''}`}>
                <figure className={`aboutMe__image ${theme ? '--dark' : ''}`}>
                    <img src={imageUser} alt="" />
                </figure>
                <h1 className={`aboutMe__title ${theme ? '--dark' : ''}`}>
                    Acerca de mí
                </h1>
                <p className='aboutMe__text'>
                    Soy Luis Carlos Hernández López, un apasionado desarrollador front-end especializado en la creación 
                    de experiencias web excepcionales mediante el uso de la potente biblioteca React. Mi trayectoria 
                    profesional ha sido un emocionante viaje a través de una variedad de proyectos desafiantes, 
                    donde he tenido la oportunidad de sumergirme de lleno en cada fase del ciclo de desarrollo.
                </p>
                <p className='aboutMe__text'>
                    A lo largo de mi carrera, he tenido el privilegio de trabajar en colaboraciones a nivel global en 
                    toda América Latina. Esta experiencia no solo me ha otorgado una comprensión profunda del entorno 
                    web y del comportamiento del usuario, sino también una perspectiva única sobre cómo integrar las últimas 
                    tendencias y tecnologías en cada producto que desarrollo.
                </p>
                <p className='aboutMe__text'>
                    Mi enfoque se basa en la búsqueda constante de la excelencia y en la superación de estándares exigentes. 
                    Me enorgullece destacar mi capacidad para no solo cumplir con los requisitos del proyecto, sino también 
                    para ofrecer soluciones innovadoras que superen las expectativas del cliente y del usuario final. 
                    Mi objetivo es crear productos de alta calidad que no solo sean funcionales, sino también visualmente 
                    atractivos y altamente intuitivos.
                </p>
                <p className='aboutMe__text'>
                    Estoy entusiasmado por contribuir con mi experiencia y habilidades en tu próximo proyecto. 
                    ¡Vamos a construir algo increíble juntos!
                </p>
                {/* <div className='aboutMe__content-button'>
                    <a href={pdf} target="_blank" rel="noopener noreferrer" download="nombre_pretendido_del archivo.pdf" title='Descargar Curriculum'> 
                        Descargar Curriculum
                    </a>
                </div> */}
            </div>
        </div>
    );
};
