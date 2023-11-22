// DownloadSection.js
import React from 'react';
import './App.css';

function DownloadSection() {
  return (
    <div className="download-section">
      <h1>Baixe o Carllet agora!</h1>
      <p>
      A sua ferramenta de gestão financeira, desenvolvida <br/> especialmente para  motoristas de aplicativo como você.<br/> Combinando funcionalidades avançadas e uma interface<br/>  intuitiva, o Carllet é a chave para simplificar e potencializar <br/> o controle das suas finanças.
      </p>
      <div className="buttons">
      <a href="" id='apple'><img src="../apple.svg" /></a>
      <a href="" id='playstore'><img src="../play.png" /></a>
    </div>
    </div>
  );
}

export default DownloadSection;