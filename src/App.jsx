// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/home'; 
import Sobre from './pages/About/about'; 
import Contatos from './pages/Contacts/contacts'; 
import Tratamentos from './pages/Tratamentos/tratamentos'; 
import { MDBContainer } from 'mdb-react-ui-kit'; // Importando o container do MDB

function App() {
  return (
    <MDBContainer fluid className="bg-custom"> {/* Adicionando classe de cor de fundo personalizada */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/tratamentos' element={<Tratamentos />} />
          <Route path='/contato' element={<Contatos />} />
        </Routes>
      </BrowserRouter>
    </MDBContainer>
  );
}

export default App;
