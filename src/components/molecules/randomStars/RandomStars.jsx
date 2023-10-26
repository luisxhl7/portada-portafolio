import React, { useEffect, useState } from "react";
import { Star } from "../../atoms/star";
import './RandomStars.scss'
import ShootingStar from "../../atoms/Shooting-star/ShootingStar";

export const RandomStars = () => {
  const [stars, setStars] = useState([]);
  const numStars = 50;

  useEffect(() => {
    const randomPosition = () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    });

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
      <ShootingStar/>
    </div>
  );
};

