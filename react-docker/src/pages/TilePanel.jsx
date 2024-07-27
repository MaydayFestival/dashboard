import React from 'react';
import Tile from './Tile';
import './TilePanel.css';

const TilePanel = () => {
  const appLinks = [
    { name: 'Application 1', link: 'https://example1.com', icon: 'app1-icon', image: '/path/to/image1.jpg' },
    { name: 'Discord', link: 'https://discord.com/', icon: 'app2-icon' },
    { name: 'Drive', link: 'https://drive.google.com/drive/folders/167DuBF_YD8rtS-3PGuUm6NcPyNovjZPu', icon: 'app2-icon' },
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
