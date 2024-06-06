import React, { useState } from "react";
import styles from "./mainSobre.module.css";

function MainSobre() {
  const [info, setInfo] = useState({
    horario: "⏰ Horário de Funcionamento: Segunda a Sexta: 8h às 20h Sábado: 9h às 14h⏰",
    mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7094753716933!2d-43.28480698827908!3d-22.88718817918243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d149a1058f7%3A0x74aaf0a5b36f3684!2sTorre%20Norte%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1712684015097!5m2!1spt-BR!2sbr",
    endereco : "Av. Dom Hélder Câmara, 5200 - Cachambi, Rio de Janeiro - RJ, CEP 20771-004"
  });

  const handleButtonClick = (horario, mapaSrc, endereco) => {
    setInfo({ horario, mapaSrc, endereco });
  };


  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.mapContainer}>
          <iframe
            src={info.mapaSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        <div className={styles.texto1Container}>
          <div className={styles.Titulo}>
            <h1>Minha Clínica</h1>
          </div>
          <p>
            Oferecemos serviços de saúde de alta qualidade para toda a família.
            Nossos profissionais dedicados estão prontos para cuidar de você.
            <br />
            <br />
            Venha nos visitar! Estamos localizados na {info.endereco}.
            
          </p>
          <h3>{info.horario}</h3>



          <div className={styles.buttonContainer}>
            <button
              className={styles.button}
              onClick={() => handleButtonClick(
                "⏰Horário de Funcionamento: Quinta: 8h às 18h⏰",
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.9989033433903!2d-43.377826123856224!3d-22.839530079302452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99639881744e51%3A0x8a3be823f32c124b!2sAv.%20Acr%C3%ADsio%20Mota%2C%20301%20-%20Guadalupe%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021660-270!5e0!3m2!1spt-BR!2sbr!4v1717637732258!5m2!1spt-BR!2sbr",
                "Av. Acrísio Mota, 301 - Guadalupe, Rio de Janeiro - RJ, 21660-270"
              )}
            >
              Associação Guadalupe
            </button>
            <button
              className={styles.button}
              onClick={() => handleButtonClick(
                "⏰Horário de Funcionamento: Segunda a Sexta: 9h às 21h Sábado: 8h às 13h⏰",
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.7094753716933!2d-43.28480698827908!3d-22.88718817918243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d149a1058f7%3A0x74aaf0a5b36f3684!2sTorre%20Norte%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1712684015097!5m2!1spt-BR!2sbr",
                "Av. Dom Hélder Câmara, 5200 - Cachambi, Rio de Janeiro CEP 20771-004 - Sala 925"
              )}
            >
              Torre Norte Shopping
            </button>
           
          </div>
        </div>
      </div>

      <div className={styles.mainContainer2}>
        <div className={styles.texto1Container2}>
          <div className={styles.Titulo2}>
            <h1>Ana Célia</h1>
          </div>
          <p>
            Ana possui graduação em Psicologia e
            pós-graduação em Terapia Cognitivo-Comportamental. 
            Além disso, participa regularmente de congressos e
            workshops para se manter atualizada com as melhores práticas e
            novas abordagens na área da psicologia.
          </p>
        </div>
      </div>
    </>
  );
}

export default MainSobre;
