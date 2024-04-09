import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from '../../components/Footer/footer'
import Card from '../../components/Tratamentos/tratamentos'
import Modal from '../../components/Modal/modal'
import "./tratamentos.css"
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
        <br/>
        <Card/>
        <br/>
        <br/>
        <br/>
        <Card/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </body>
        <Footer/>
    </>
  );
}

export default tratamento;
