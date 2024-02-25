import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { useMediaQuery } from 'react-responsive';

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  const isScreenSmall = useMediaQuery({ maxWidth: 755 });

  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
          <a href="/" className={styles.logo}>
            {isScreenSmall ? (
              <img
                className={styles.logoCell}
                src="https://w7.pngwing.com/pngs/984/903/png-transparent-psychology-logo-organization-psychology-symbol-logo-psychology-psychologist.png"
                alt="Logo"
                width="50px"
                height='50px'
              />
            ) : (
              <h1>Psicóloga Ana Célia do Nascimento</h1>
            )}
          </a>
          <button className={styles.hamburger} onClick={toggleNav}></button>
          <ul className={styles.navList}>
            <li>
              <div className={styles.optBtn}>
                <a href="#" className={styles.navBtn} onClick={closeNav}>
                  Inicio
                </a>
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
                <a href="#" className={styles.navBtn} onClick={closeNav}>
                  Sobre
                </a>
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
                <a href="#" className={styles.navBtn} onClick={closeNav}>
                  Tratamentos
                </a>
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
                <a href="#" className={styles.navBtn} onClick={closeNav}>
                  Contato
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
