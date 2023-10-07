import React, { useEffect, useState } from "react";
import { Star } from "../../atoms/star/Star";
import './RandomStars.scss'

export const RandomStars = () => {
  const [stars, setStars] = useState([]);
  const numStars = 50; // Número de estrellas que deseas generar

  useEffect(() => {
    // Función para generar una posición aleatoria para una estrella
    const randomPosition = () => ({
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight,
    });

    // Generar las estrellas aleatorias
    const generatedStars = Array.from({ length: numStars }, (_, index) => ({
      id: index,
      position: randomPosition(),
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="random-stars">
      {stars.map((star) => (
        <Star key={star.id} left={star.position.left} top={star.position.top} />
      ))}
    </div>
  );
};

