import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Lore from './views/Lore';
import Inscripciones from './views/Inscripciones';
import Finales from './views/Finales';
import Votaciones from './views/Votaciones';
import { PATHS } from './constants';
import styles from './styles.module.css';

function App() {
  return (
    <div className={styles.container}>
      <header>
       <h1>UTNianos FAQ</h1>
      </header>
      <main>
        <Routes>
          <Route path={PATHS.home} element={<Home />} />
          <Route path={PATHS.lore} element={<Lore />} />
          <Route path={PATHS.inscripciones} element={<Inscripciones />} />
          <Route path={PATHS.finales} element={<Finales />} />
          <Route path={PATHS.votaciones} element={<Votaciones />} />
        </Routes>
      </main>
      <footer>
        Hecho con el poder de los memes por UTNianos <a href="https://github.com/pyritewolf/utnianos-faq" target="_blank" rel="noreferrer"><i className="lab la-github"></i></a>
      </footer>
    </div>
  );
}

export default App;
