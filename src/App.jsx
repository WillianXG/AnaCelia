// src/App.js
import React from 'react';
import NavBar from './components/navbar/NavBar';
import './App.css'
import { register } from 'swiper/element/bundle'

register();
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar'


function App() {
  return (
   <>
   
   <NavBar>
   </NavBar>
 
   </>
  );
}

export default App;
