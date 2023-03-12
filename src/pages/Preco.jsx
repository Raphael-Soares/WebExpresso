import React from "react";
import styled from "styled-components";

const PriceContainer = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
`;

const PriceTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const PriceSubtitle = styled.p`
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
`;

const Price = styled.p`
    font-size: 36px;
    font-weight: bold;
    color: #f63a3a;
    margin-bottom: 10px;
`;

const PriceButton = styled.button`
    background-color: #f63a3a;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #c92c2c;
    }
`;

const PriceComponent = () => {
    return (
        <PriceContainer>
            <PriceTitle>Planos para o seu negócio</PriceTitle>
            <PriceSubtitle>Desenvolvimento de landing pages personalizadas</PriceSubtitle>
            <Price>R$ 100,00</Price>
            <PriceButton onClick={() => alert("Entre em contato para mais informações!")}>
                Obtenha um orçamento
            </PriceButton>
        </PriceContainer>
    );
};

export default PriceComponent;
