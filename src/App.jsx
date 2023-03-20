import { useCallback, useRef, lazy, Suspense } from "react";

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

const Navbar = lazy(() => import("./components/Navbar"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

const SobreLandingPages = lazy(() => import("./pages/SobreLandingPages"));
const Servicos = lazy(() => import("./pages/Servicos"));
const Portfolio = lazy(() => import("./pages/Portifolio"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Preco = lazy(() => import("./pages/Preco"));
const Contato = lazy(() => import("./pages/Contato"));
const Form = lazy(() => import("./pages/Form"));

function App() {
    const precoRef = useRef(null);
    const sobreRef = useRef(null);
    const servicosRef = useRef(null);
    const portfolioRef = useRef(null);

    const contatoRef = useRef(null);
    const formRef = useRef(null);

    const scrollTo = useCallback((ref) => {
        window.scrollTo({
            top: ref,
            behavior: "smooth",
        });
    }, []);

    const scrollToSobre = useCallback(() => {
        scrollTo(sobreRef.current.offsetTop);
    }, [scrollTo]);

    const scrollToServicos = useCallback(() => {
        scrollTo(servicosRef.current.offsetTop);
    }, [scrollTo]);

    const scrollToPortfolio = useCallback(() => {
        scrollTo(portfolioRef.current.offsetTop);
    }, [scrollTo]);

    const scrollToPreco = useCallback(() => {
        scrollTo(precoRef.current.offsetTop);
    }, [scrollTo]);

    const scrollToForm = useCallback(() => {
        scrollTo(formRef.current.offsetTop);
    }, [scrollTo]);

    const scrollToContato = useCallback(() => {
        scrollTo(contatoRef.current.offsetTop);
    }, [scrollTo]);

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
            <Wrapper>
                <SobreLandingPages />
                <Preco scrollToForm={scrollToForm} />
            </Wrapper>
            <div ref={contatoRef}></div>
            <Contato />

            <div ref={formRef}></div>
            <Form />

            <Footer />
        </div>
    );
}

export default App;
