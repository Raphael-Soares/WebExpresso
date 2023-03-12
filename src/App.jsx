import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

import SobreLandingPages from "./pages/SobreLandingPages";
import Servicos from "./pages/Servicos";
import Portfolio from "./pages/Portifolio";
import Sobre from "./pages/Sobre";
import Preco from "./pages/Preco";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Header />

            <Servicos />
            <Sobre />
            <Portfolio />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",

                    margin: "0 auto",
                    padding: "0 5vw",
                }}
            >
                <SobreLandingPages />
                <Preco />
            </div>

            <Footer />
        </div>
    );
}

export default App;
