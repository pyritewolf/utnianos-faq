import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Lore from './views/Lore';
import Inscripciones from './views/Inscripciones';
import Finales from './views/Finales';
import Votaciones from './views/Votaciones';
import { PATHS } from './constants';
import './App.css';

function App() {
  return (
    <div className="root container">
      <header className="header">
       <h1>UTNianos FAQ</h1>
      </header>
      <Routes>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.lore} element={<Lore />} />
        <Route path={PATHS.inscripciones} element={<Inscripciones />} />
        <Route path={PATHS.finales} element={<Finales />} />
        <Route path={PATHS.votaciones} element={<Votaciones />} />
      </Routes>
    </div>
  );
}

export default App;
