import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`¡Hola, ${nombre}! Bienvenido.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;