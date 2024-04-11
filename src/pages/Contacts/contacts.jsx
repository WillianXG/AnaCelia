import React from "react";
import NavBar from "../../components/navbar/NavBar";
import styles from './contacts.module.css'
import Footer from  '../../components/Footer/footer'
import MyForm from "../../components/Form/form";
function Contato() {
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
      <br/>
      <br/>
      <MyForm/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default Contato;
