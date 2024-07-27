import React from 'react';
import Tile from './Tile';
import './TilePanel.css';

const TilePanel = () => {
  const appLinks = [
    { name: 'Openproject', link: 'https://op.assomayday.org', icon: 'app1-icon' },
    { name: 'Dolibarr', link: 'https://dolibarr.assomayday.org', icon: 'app2-icon' },
    { name: 'Trompette', link: 'https://trompette.espace120.fr/ui/login/', icon: 'app2-icon' },
    { name: 'Strapi', link: 'https://strapi.assomayday.org', icon: 'app2-icon' },
    { name: 'Traefik', link: 'https://monitor.assomayday.org', icon: 'app2-icon' },
  ];

  return (
    <div className="tile-panel">
      {appLinks.map((app, index) => (
        <Tile key={index} name={app.name} link={app.link} icon={app.icon} />
      ))}
    </div>
  );
};

export default TilePanel;
