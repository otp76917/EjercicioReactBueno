import React from 'react';

function Tarea({ tarea, onToggle }) {
  return (
    <li>
      <input type="checkbox" checked={tarea.completado} onChange={() => onToggle(tarea.id)} />
      {tarea.texto}
    </li>
  );
}

export default Tarea;