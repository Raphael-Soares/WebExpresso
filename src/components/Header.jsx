import React from "react";
import header from "../assets/header.png";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #f5f1edff;
    height: 80vh;
    padding: 0 5vw;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: ;
        height: auto;
    }
`;

const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid; */
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Media = styled.img`
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #2d2d2dff;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    color: #2d2d2dff;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const TextGradient = styled.span`
    background: linear-gradient(120deg, #1192ce 0%, #0018f2 50%, #a600ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

function Header() {
    return (
        <Container>
            <Content>
                <Title>
                    Alavanque o seu negócio com
                    <TextGradient> Landing Pages Profissionais</TextGradient>!
                </Title>
                <Subtitle>
                    Nós criamos Landing Pages personalizadas e profissionais para pequenos negócios
                    que buscam aumentar sua presença online e converter visitantes em clientes.
                    Aumente suas vendas e expanda seus negócios conosco!
                </Subtitle>
            </Content>
            <Media src={header} />
        </Container>
    );
}

export default Header;
