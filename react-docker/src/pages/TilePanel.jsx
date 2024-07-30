import React from 'react';
import Tile from './Tile';
import './TilePanel.css';
import Logo from './pictures/favicon.ico';
import discordIcon from './pictures/discord.webp';
import driveIcon from './pictures/drive.png';
import mailsIcon from './pictures/gmail.png';
import opIcon from './pictures/op.png';
import strapiIcon from './pictures/strapi.png';
import dolibarrIcon from './pictures/dolibarr.png';
import traefikIcon from './pictures/traefik.webp';
import trompetteIcon from './pictures/trompette.png';
import benevolesIcon from './pictures/benevoles.png';

const TilePanel = () => {
  const appLinks = [
    
    { name: 'Discord - Echanges interne', link: 'https://discord.com/channels/1265099843978793080/1265099844444487802', icon: 'app2-icon', image: discordIcon },
    { name: 'Drive - Dossier Mayday 2025', link: 'https://drive.google.com/drive/folders/167DuBF_YD8rtS-3PGuUm6NcPyNovjZPu', icon: 'app2-icon', image: driveIcon },
    { name: 'Mail - Echanges externes', link: 'https://mail.google.com/', icon: 'app2-icon', image: mailsIcon },
    { name: 'OpenProject - Gestion de projet', link: 'https://op.assomayday.org', icon: 'app1-icon', image: opIcon },
    { name: 'Strapi - Gestion site web', link: 'https://strapi.assomayday.org', icon: 'app2-icon', image: strapiIcon },
    { name: 'Dolibarr - Gestion financière', link: 'https://dolibarr.assomayday.org', icon: 'app2-icon', image: dolibarrIcon },
    { name: 'Site officiel', link: 'https://maydayfestival.fr', icon: 'app1-icon', image: Logo },
    { name: 'Site bénévoles', link: 'https://benevoles.maydayfestival.fr', icon: 'app1-icon', image: benevolesIcon },
    { name: 'Trompette - Gestion d\'identité', link: 'https://trompette.espace120.fr/ui/login/', icon: 'app2-icon', image: trompetteIcon },
    { name: 'Traefik - Proxy', link: 'https://monitor.assomayday.org', icon: 'app2-icon', image: traefikIcon },
  ];

  return (
    <div className="tile-panel">
      {appLinks.map((app, index) => (
        <Tile key={index} name={app.name} link={app.link} icon={app.icon} image={app.image} /> 
      ))}
    </div>
  );
};

export default TilePanel;
