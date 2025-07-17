import React, { useState, useRef, useEffect } from 'react';

function ColorChangingBackground() {
  const [isChanging, setIsChanging] = useState(false);
  const intervalRef = useRef(null);
  const colors = ['blue', 'red'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const startColorChange = () => {
    if (!isChanging) {
      setIsChanging(true);
      intervalRef.current = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 50); // Altera a cor a cada 50ms para um efeito rápido
    }
  };

  const stopColorChange = () => {
    setIsChanging(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Limpa o intervalo quando o componente é desmontado
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: colors[currentColorIndex],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // transition: 'background-color 0.05s linear', // Transição suave para a mudança de cor
      }}
    >
      <button
        onClick={isChanging ? stopColorChange : startColorChange}
        style={{
          padding: '15px 30px',
          fontSize: '20px',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: colors[currentColorIndex],
          color: '#333',
        }}
      >
        {isChanging ? 'Parar Mudança de Cor' : 'Iniciar Mudança de Cor'}
      </button>
    </div>
  );
}

export default ColorChangingBackground;