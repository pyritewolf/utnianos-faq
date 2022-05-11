import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Ingreso from './views/Ingreso';
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
        <Route path={PATHS.ingreso} element={<Ingreso />} />
      </Routes>
    </div>
  );
}

export default App;
