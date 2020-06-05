import React from 'react';
import './App.css';

import Routes from './routes';

// JSX: Sintaxe de XML dentro do JavaScript

function App() {
  return (
    <Routes />
  );
}

export default App;

/**
 * Observaçoes:
 * Imutabilidade: Entendesse por imutável, algo não esta sujeito a mudar/alterar. É esse conceito que levamos para o estado,
   pois não conseguimos alterar da maneira tradicional como era feito no javascript antigamente, apenas conseguimos alterar com o método setState.
 */