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
        A plataforma oferece recursos como:
        <ul className='list'>
         <li>Registro automático de corridas e gastos</li>
         <li>Cálculo do lucro líquido</li>
         <li>Análise de despesas</li>
         <li>Criar metas de ganhos</li>
         <li>Receber alertas sobre gastos excessivos com manutenções,</li>
        </ul> 
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;