import React, { useState } from 'react';
import Card from './Card';
import './CalculadoraMedia.css'; 


const CalculadoraMedia: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [notas, setNotas] = useState<number[]>([0, 0]);
  const [erro, setErro] = useState<string | null>(null);
  const [cards, setCards] = useState<Array<{ nome: string; media: number; situacao: 'Aprovado' | 'Reprovado' }>>([]);

  // Função para calcular a média das notas
  const calcularMedia = (notas: number[]): number => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  };

  // Função para validar as notas
  const validarNotas = (notas: number[]): boolean => {
    for (const nota of notas) {
      if (isNaN(nota) || nota < 0 || nota > 10) {
        setErro('As notas devem ser números entre 0 e 10.');
        return false;
      }
    }
    setErro(null);
    return true;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validarNotas(notas)) {
      const mediaCalculada = calcularMedia(notas);
      const situacao = mediaCalculada >= 7 ? 'Aprovado' : 'Reprovado';

      // Adiciona um novo card à lista de cards
      setCards([...cards, { nome, media: mediaCalculada, situacao }]);

      // Limpa o formulário
      setNome('');
      setNotas([0, 0]);
      setErro(null);
    }
  };

  // Função para atualizar as notas no estado
  const handleNotaChange = (index: number, value: string) => {
    const novaNota = parseInt(value);
    const novasNotas = [...notas];
    novasNotas[index] = novaNota;
    setNotas(novasNotas);
  };

  return (
    <div className="container">
      <div className="calculadora-container">
        <h2>Calculadora de Média de Notas</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group" >
            <label htmlFor="nome">Nome do Aluno:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="notas-container">
            {notas.map((nota, index) => (
              <div className="form-group" key={index}>
                <label htmlFor={`nota-${index}`}>Nota {index + 1}:</label>
                <input
                  type="number"
                  id={`nota-${index}`}
                  value={nota}
                  min="0"
                  max="10"
                  step="1"
                  className="form-input"
                  required
                  onChange={(e) => handleNotaChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          <button type="submit" className="form-button">Calcular Média</button>
        </form>

        {erro && <p style={{ color: 'red' }}>{erro}</p>}

      </div>
      
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            nome={card.nome}
            media={card.media}
            situacao={card.situacao}
          />
        ))}
      </div>
    </div>
  );
};

export default CalculadoraMedia