import React, { useState } from 'react';

//ruta imagen preestablecida
const defaultImage = 'https://via.placeholder.com/300x450.png?text=No+image';

export function Card({title, image}) {
  //Si la ruta de la imagen está rota...
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <article className="card card-program">
      <a className="link img-wrapper" href='#'>
        <img className="img" src={imageError ? defaultImage : image} alt={`Card de ${title}`} onError={handleError} />
      </a>
      <p className="tx tx-card">{title}</p>
    </article>
  );
}