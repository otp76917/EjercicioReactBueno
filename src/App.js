import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './Layout';
import Inicio from './componentes/Inicio';
import AcercaDeMi from './componentes/AcercaDeMi';
import CasosDeExito from './componentes/CasosDeExito';
import Contacto from './componentes/Contacto';

function App() 
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<Inicio/>}/>
        <Route path='/AcercaDeMi' element={<AcercaDeMi/>}/>
        <Route path='CasosDeExito' element={<CasosDeExito/>}/>
        <Route path='Contacto' element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;