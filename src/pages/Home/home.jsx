import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Main from "../../components/Corpo/main";
import styles from './home.module.css'

function Home(){
    return(
        <>
        <header>
            <NavBar/>
        </header>
        <body>
            <Main/>
        </body>
        </>
    )
}

export default Home