import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Velha from './pages/JogoDaVelha'
import Forca from './pages/JogoDaForca'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="message">
          <h2>Aplicação feita baseada na Programação Baseada em Componentes</h2>
          <p>Use o menu para navegar entre os jogos disponíveis</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/jogo-da-velha">Jogo da Velha</Link>
            </li>
            <li>
              <Link to="/jogo-da-forca">Jogo da Forca</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/jogo-da-velha" element={<Velha />} />
          <Route path="/jogo-da-forca" element={<Forca palavra={"Teste"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
