import React, { useState } from 'react';
import Tarea from './Tarea';

function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Comprar leche', completado: false },
    { id: 2, texto: 'Hacer la cama', completado: true },
    { id: 3, texto: 'Estudiar React', completado: false },
  ]);

  const toggleCompletado = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completado: !tarea.completado } : tarea
      )
    );
  };

  return (
    <ul>
      {tareas.map((tarea) => (
        <Tarea key={tarea.id} tarea={tarea} onToggle={toggleCompletado} />
      ))}
    </ul>
  );
}

export default ListaTareas;