import React from 'react';
import './Tile.css';

const Tile = ({ name, link, icon, image }) => { // Ajout de la prop "image"
  return (
    <a href={link} className="tile" target="_blank" rel="noopener noreferrer">
      {image && <img src={image} alt={name} className="tile-image" />} {/* Image conditionnelle */}
      <i className={`icon ${icon}`}></i>
      <span>{name}</span>
    </a>
  );
};

export default Tile;
