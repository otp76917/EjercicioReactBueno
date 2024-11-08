import React, { useState } from 'react';

function BuscadorProductos({ productos }) {
  const [busqueda, setBusqueda] = useState('');
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleSelect   
 = () => {
    const productoSeleccionado = productosFiltrados[0]; // Toma el primer producto de la lista filtrada
    if (productoSeleccionado) {
      setProductosSeleccionados([...productosSeleccionados, productoSeleccionado]);
      setBusqueda(''); // Limpia el campo de búsqueda
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button onClick={handleSelect} disabled={productosFiltrados.length !== 1}>
        Agregar
      </button>
      <ul>
        {productosFiltrados.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
      <h2>Productos seleccionados:</h2>
      <ul>
        {productosSeleccionados.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default BuscadorProductos;