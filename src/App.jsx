import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #f5f1edff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;

    padding: 0 5vw;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: ;
        height: auto;
    }
`;

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

            <Wrapper>
                <SobreLandingPages />
                <Preco />
            </Wrapper>

            <Form />

            <Footer />
        </div>
    );
}

export default App;
