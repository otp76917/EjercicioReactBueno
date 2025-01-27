import React, { useState } from 'react';

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>   

        {isVisible ? 'Ocultar' : 'Mostrar'}
      </button>
      {isVisible && <p>Este contenido se muestra y oculta.</p>}
    </div>
  );
}

export default Toggle;