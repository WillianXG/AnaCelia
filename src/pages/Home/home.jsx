import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Main from "../../components/Corpo/main";

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