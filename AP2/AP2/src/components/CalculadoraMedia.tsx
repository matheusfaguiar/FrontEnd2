import React, { useState } from 'react';

const CalculadoraMedia: React.FC = () => {
  const [notas, setNotas] = useState<number[]>([0, 0, 0]);
  const [erro, setErro] = useState<string | null>(null);
  const [media, setMedia] = useState<number | null>(0);

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


  // Função para atualizar as notas no estado
  const handleNotaChange = (index: number, value: string) => {
    
    // Verifica se o valor é um número inteiro válido
    const novaNota = parseInt(value, 10);
    if (isNaN(novaNota)) {
      setErro('Por favor, insira um número inteiro válido.');
      return;
    }
    
    const novasNotas = [...notas];
    novasNotas[index] = novaNota;
    setNotas(novasNotas);

    // Calcula a média em tempo real
    if (validarNotas(notas)) {
      const mediaCalculada = calcularMedia(novasNotas);
      setMedia(mediaCalculada);
      setErro(null); // Limpa o erro se as notas forem válidas
    }
  };

  return (
    <div>
      <h1>Calculadora de Média de Notas</h1>
    
      {notas.map((nota, index) => (
        <div key={index}>
          <label htmlFor={`nota-${index}`}>Nota {index + 1}: </label>
          <input
            type="number"
            id={`nota-${index}`}
            value={nota}
            onChange={(e) => handleNotaChange(index, e.target.value)}
            min="0"
            max="10"
            step="1"
            required
          />
        </div>
      ))}

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {media !== null && !erro && (
        <p>
          Média: <strong>{media.toFixed(2)}</strong>
        </p>
      )}
    </div>
  );
};

export default CalculadoraMedia;