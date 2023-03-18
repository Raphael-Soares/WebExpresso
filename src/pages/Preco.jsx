import React from "react";
import styled from "styled-components";

const PriceContainer = styled.div`
    margin-bottom: 20px;
`;

const PriceTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const PriceSubtitle = styled.p`
    font-size: 18px;
    color: #666;
`;

const Price = styled.p`
    font-size: 36px;
    font-weight: bold;
    color: #0018f2;
    margin: 0;
    margin-bottom: 10px;
`;

const PriceText = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0;

    font-size: 18px;
    margin-right: 0.5em;
`;

const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;

    /* border: 1px solid #0018f2; */
`;

const PriceButton = styled.button`
    background-color: #0018f2;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #0013bb;
    }
`;

function Preco({ scrollToForm }) {
    return (
        <PriceContainer>
            <PriceTitle>Planos para o seu negócio</PriceTitle>
            <PriceSubtitle>Desenvolvimento de landing pages personalizadas</PriceSubtitle>

            <PriceWrapper>
                <PriceText>À partir de</PriceText>
                <Price>R$ 100,00</Price>
            </PriceWrapper>

            <PriceButton onClick={scrollToForm}>Peça um orçamento</PriceButton>
        </PriceContainer>
    );
}

export default Preco;
