import React, { useState } from 'react';

//ruta imagen preestablecida
const defaultImage = 'https://via.placeholder.com/300x450.png?text=No+image';

export function Modal({title, image, description, releaseYear}) {
  //Si la ruta de la imagen está rota...
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  return (
    <article className="modal">

      <img className="img" src={imageError ? defaultImage : image} alt={`Card de ${title}`} onError={handleError} />

      <div className='info-wrapper'>
        <h4 className="title">{title}</h4>
        <p className='tx'>{description}</p>
        <p className='tx'>Release year: {releaseYear}</p>
      </div>
    </article>
  );
}