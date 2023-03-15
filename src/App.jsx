import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SobreLandingPages from "./pages/SobreLandingPages";
import Servicos from "./pages/Servicos";
import Portfolio from "./pages/Portifolio";
import Sobre from "./pages/Sobre";
import Preco from "./pages/Preco";
import Form from "./pages/Form";

function App() {
    return (
        <div>
            <Navbar />
            <Header />

            <Sobre />
            <Servicos />
            <Portfolio />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "start",

                    margin: "0 auto",
                    padding: "0 5vw",
                }}
            >
                <SobreLandingPages />
                <Preco />
            </div>

            <Form />

            <Footer />
        </div>
    );
}

export default App;
