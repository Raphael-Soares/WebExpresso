import { useRef } from "react";

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
import Contato from "./pages/Contato";
import Form from "./pages/Form";

function App() {
    const precoRef = useRef(null);
    const sobreRef = useRef(null);
    const servicosRef = useRef(null);
    const portfolioRef = useRef(null);

    const contatoRef = useRef(null);
    const formRef = useRef(null);

    function scrollTo(ref) {
        window.scrollTo({
            top: ref,
            behavior: "smooth",
        });
    }

    function scrollToSobre() {
        scrollTo(sobreRef.current.offsetTop);
    }

    function scrollToServicos() {
        scrollTo(servicosRef.current.offsetTop);
    }

    function scrollToPortfolio() {
        scrollTo(portfolioRef.current.offsetTop);
    }

    function scrollToPreco() {
        scrollTo(precoRef.current.offsetTop);
    }

    function scrollToForm() {
        scrollTo(formRef.current.offsetTop);
    }

    function scrollToContato() {
        scrollTo(contatoRef.current.offsetTop);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>
            {
                <Navbar
                    scrollToSobre={scrollToSobre}
                    scrollToServicos={scrollToServicos}
                    scrollToPortfolio={scrollToPortfolio}
                    scrollToPreco={scrollToPreco}
                    scrollToForm={scrollToForm}
                    scrollToContato={scrollToContato}
                />
            }
            <Header />

            <div ref={sobreRef}></div>
            <Sobre />

            <div ref={servicosRef}></div>
            <Servicos />

            <div ref={portfolioRef}></div>
            <Portfolio />

            <div ref={precoRef}></div>
            <div ref={contatoRef}></div>
            <Wrapper>
                <SobreLandingPages />
                <Preco scrollToForm={scrollToForm} />
            </Wrapper>
            <Contato />

            <div ref={formRef}></div>
            <Form />

            <Footer />
        </div>
    );
}

export default App;
