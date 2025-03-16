import React from 'react';
import './Card.css';

interface CardProperties {
  nome: string;
  media: number;
  situacao: 'Aprovado' | 'Reprovado';
}

const Card: React.FC<CardProperties> = ({ nome, media, situacao }) => {
  return (
    <div className={`card ${situacao.toLowerCase()}`}>
      <h2>{nome}</h2>
      <p>Média: {media}</p>
      <p>Situação: <b>{situacao}</b></p>
    </div>
  );
};

export default Card