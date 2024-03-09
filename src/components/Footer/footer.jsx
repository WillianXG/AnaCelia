// Footer.js

import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.mapArea}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.9282722883693!2d-43.282549909347274!3d-22.88705474268293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997d149a1058f7%3A0x74aaf0a5b36f3684!2sTorre%20Norte%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1709952084668!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div>Google Maps Area</div>
      </div>

      <div className={styles.contactArea}>
        {/* Formulário de Contato */}
        <form>
          <div className={styles.inputs}>
            <div className={styles.input1}>
              <label>
                Nome:
                <input type="text" name="name" />
              </label>
            </div>
            <div className={styles.input2}>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
            </div>
          </div>
          <label>
            Mensagem:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
