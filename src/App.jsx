// src/App.js
import React from 'react';
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/home';
import Sobre from './pages/About/about';
import Contatos from './pages/Contacts/contacts';
import Tratamentos from './pages/Tratamentos/tratamentos';


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
      <Route path='/tratamentos' element={<Tratamentos/>}/>
      <Route path='/contato' element={<Contatos/>}/>
    </Routes>
   </BrowserRouter>
  
   

   </>
  );
}

export default App;
