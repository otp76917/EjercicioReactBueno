import React from 'react';
import './App.css';
import Contador from './Contador';
import BuscadorProductos from './BuscadorProductos';

const productos = [
  { id: 1, nombre: 'Manzana' },
  { id: 2, nombre: 'Banana' },
  { id: 3, nombre: 'Naranja' },
  { id: 4, nombre: 'Pera' }
];

<BuscadorProductos productos={productos} />

function App() {
  return (
    <div className="App">
      <BuscadorProductos productos={productos} />

    </div>
  );
}

export default App;