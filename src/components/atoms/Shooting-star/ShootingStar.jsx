import React, { useEffect, useState } from 'react';
import './ShootingStar.scss'

const ShootingStar = () => {
    const [isActived, setisActived] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            setisActived(false)
            setTimeout(() => {
                setisActived(true)
            }, 1000); // Ajusta este valor según la frecuencia deseada de la aparición de estrellas fugaces
        }, 10000); // Ajusta este valor según la duración deseada de la animación

        return () => clearInterval(interval);
    }, []);

    return (
        <span className={isActived ? `Shooting-star` : ''}>
        </span>
    );
};

export default ShootingStar;
