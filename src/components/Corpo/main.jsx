import React from "react";
import styles from "./main.module.css";
import ana3 from "../../images/ana3.jpeg"
import ana4 from "../../images/ana4.jpeg"
function Main() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
          <img src={ana3}></img>
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
          <img src={ana4}></img>
        </div>
      </div>

    </>
  );
}

export default Main;
