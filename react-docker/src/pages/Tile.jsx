import React from 'react';
import './Tile.css'; 

const Tile = ({ name, link, icon, image }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="tile">
      {image && <img src={image} alt={name} className="tile-image" />}
      <span className={`tile-icon ${icon}`}></span>
      <span className="tile-name">{name}</span>
    </a>
  );
};

export default Tile;
