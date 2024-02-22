import React, { useState } from 'react';
import styles from './NavBar.module.css';

function NavBar() {
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header className={styles.header}>
                <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
                    <a href='/' className={styles.logo}><h1>Psicóloga Ana Célia do Nascimento</h1></a>
                    <button className={styles.hamburger} onClick={toggleNav}></button>
                    <ul className={styles.navList}>
                        <li><a href='#' className={styles.navBtn}>Inicio</a></li>
                        <li><a href='#' className={styles.navBtn}>Sobre</a></li>
                        <li><a href='#' className={styles.navBtn}>Tratamentos</a></li>
                        <li><a href='#' className={styles.navBtn}>Contato</a></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.hero}>

            </main>
        </>
    );
}

export default NavBar;
