import React from "react";
import styles from "./main.module.css";

function Main() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <img src="https://sujeitoprogramador.com/wp-content/uploads/2023/05/coverfrt.png"></img>
        </div>
        <div className={styles.texto1Container}>
          <div className={styles.Titulo}>
            <h1>Ana Célia</h1>
          </div>

          <p>
            sado jadosjdd oajosdd aosdodkndasjads adskdsk adskads adskdsk
            adskads adskdsk adskadsadskdsk adska dsadskdsk adskadsadskdsk
            adskadsadskdsk adskadsadskdsk adskads
          </p>
          <p>
            sado jadosjdd oajosdd aosdodkndasjads adskdsk adskads adskdsk
            adskads adskdsk adskadsadskdsk adska dsadskdsk adskadsadskdsk
            adskadsadskdsk adskadsadskdsk adskads
          </p>
        </div>
      </div>
      <div className={styles.mainContainer2}>
       
        <div className={styles.texto1Container2}>
          <div className={styles.Titulo2}>
            <h1>Ana Célia</h1>
          </div>

          <p>
            sado jadosjdd oajosdd aosdodkndasjads adskdsk adskads adskdsk
            adskads adskdsk adskadsadskdsk adska dsadskdsk adskadsadskdsk
            adskadsadskdsk adskadsadskdsk adskads
          </p>
          <p>
            sado jadosjdd oajosdd aosdodkndasjads adskdsk adskads adskdsk
            adskads adskdsk adskadsadskdsk adska dsadskdsk adskadsadskdsk
            adskadsadskdsk adskadsadskdsk adskads
          </p>
        </div>
        <div className={styles.imgContainer2}>
          <img src="https://sujeitoprogramador.com/wp-content/uploads/2023/05/coverfrt.png"></img>
        </div>
      </div>

    </>
  );
}

export default Main;
