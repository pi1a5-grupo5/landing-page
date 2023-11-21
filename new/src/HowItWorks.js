import React from 'react';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      {/* Divisão para a imagem */}
      <div className="image-section">
        <img src="budget.png" alt="How It Works" />
      </div>

      {/* Divisão para o título e o parágrafo */}
      <div className="text-section">
        <h2>Como Funciona</h2>
        <p>
          Descrição sobre como o Carllet funciona. Pode ser um parágrafo mais longo
          explicando os recursos e benefícios.
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;