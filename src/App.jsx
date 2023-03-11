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
            <SobreLandingPages />
            <Preco />

            <Footer />
        </div>
    );
}

export default App;
