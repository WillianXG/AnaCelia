import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/Footer/footer';
import Card from '../../components/Tratamentos/tratamentos';
import "./tratamentos.css";
import CardTratamento from "../../components/CardTramento/CardTramento";

function tratamento() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <br/>
        <br/>
        <br/>
        <Card/>
        <br/>
        <h1>Alguns tratamentos que oferecemos</h1>
        <br/>
        <br/>
        <br/>
        <CardTratamento/>
        <br/>
        <br/>
        
      </body>
      <Footer/>
    </>
  );
}

export default tratamento;
