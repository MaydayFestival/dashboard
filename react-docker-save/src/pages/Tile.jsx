import React from 'react';
import './Tile.css';

const Tile = ({ name, link, icon }) => {
  return (
    <a href={link} className="tile" target="_blank" rel="noopener noreferrer">
      <i className={`icon ${icon}`}></i> {/* Icône (à remplacer par une bibliothèque d'icônes) */}
      <span>{name}</span>
    </a>
  );
};

export default Tile;
