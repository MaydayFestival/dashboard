import React from 'react';
import TilePanel from './pages/TilePanel'; // Chemin relatif vers le composant
import Navbar from './pages/Navbar'; // Chemin relatif vers le composant

function App() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Navbar />
      <TilePanel />
    </div>
  );
}

export default App;
