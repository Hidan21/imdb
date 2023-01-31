import React from 'react';

const PeliIndex = ({ datos }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w400${datos.backdrop_path}`}
        alt={datos.title}
      />
      <h2>{datos.title}</h2>
    </div>
  );
};

export default PeliIndex;
