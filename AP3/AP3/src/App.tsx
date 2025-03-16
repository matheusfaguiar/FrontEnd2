import React from 'react';
import Card from './components/Card';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Situação dos Alunos</h1>
      <div className="card-container">
        <Card nome="Fulano" media={8.5} situacao="Aprovado" />
        <Card nome="Ciclano" media={4.5} situacao="Reprovado" />
      </div>
    </div>
  );
};

export default App
