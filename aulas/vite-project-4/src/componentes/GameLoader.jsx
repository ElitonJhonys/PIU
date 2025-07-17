import React from 'react';

function GameLoader() {
  // O link do jogo agora está definido diretamente dentro do componente
  const gameUrl = 'https://2048game.com/'; // <-- Coloque seu link aqui!
  const title = 'Meu Jogo Incorporado'; // O título também pode ser fixo aqui

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
        color: 'white',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>{title}</h2>
      <iframe
        src={gameUrl}
        title={title}
        style={{
          width: '90%',
          height: '80%',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
        allowFullScreen
      >
        Seu navegador não suporta iframes.
      </iframe>
      <p style={{ marginTop: '20px', fontSize: '0.9em' }}>
        Certifique-se de que o site do jogo permite a incorporação via iframe.
      </p>
    </div>
  );
}

export default GameLoader;