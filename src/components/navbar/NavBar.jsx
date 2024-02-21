import styles from './NavBar.module.css'


function NavBar(){
    return(
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <a href='/' className={styles.logo}><h1>Psicóloga Ana Célia do Nascimento</h1></a>
                    <ul className={styles.navList}>
                        <li><a href='#' className={styles.navBtn}>Inicio</a></li>
                        <li><a href='#' className={styles.navBtn}>Sobre</a></li>
                        <li><a href='#' className={styles.navBtn}>Tratamentos</a></li>
                        <li><a href='#' className={styles.navBtn}>Contato</a></li>
                    </ul>
                </nav>
            </header>
            <main className={styles.hero}></main>
        </>    
        )
}

export default NavBar