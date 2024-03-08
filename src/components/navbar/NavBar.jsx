import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

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
        <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
          <a href="/" className={styles.logo}>
            {isScreenSmall ? (
              <img
                className={styles.logoCell}
                src="../images/logo.png"
                alt="Logo"
                width="50px"
                height="50px"
              />
            ) : (
              <h1>Psicóloga Ana Célia do Nascimento</h1>
            )}
          </a>
          <button className={styles.hamburger} onClick={toggleNav}></button>
          <ul className={styles.navList}>
            <li>
              <div className={styles.optBtn}>
              <Link to="/" className={styles.navBtn} onClick={closeNav}>
                  Inicio
                </Link> 
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
               <Link to="/sobre" className={styles.navBtn} onClick={closeNav}>
                  Sobre
                </Link> 
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
              <Link to="/tratamentos" className={styles.navBtn} onClick={closeNav}>
                  Tratamentos
                </Link> 
              </div>
            </li>
            <li>
              <div className={styles.optBtn}>
              <Link to="/contato" className={styles.navBtn} onClick={closeNav}>
                  Contato
                </Link> 
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
