import React from "react";
import styled from "styled-components";

const SobreWrapper = styled.div`
    margin: 0 auto;
    padding: 5vw;

    background-color: #f5f1edff;
`;

const Titulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const Texto = styled.p`
    font-size: 1.2rem;
    line-height: 1.5;
`;

function Sobre() {
    return (
        <SobreWrapper>
            <Titulo>Web Expresso: Acelerando seus negócios online</Titulo>
            <Texto>
                Na Web Expresso, acreditamos que toda empresa merece ter uma presença online forte e
                eficaz. É por isso que oferecemos serviços personalizados e acessíveis para ajudá-lo
                a maximizar seu retorno sobre o investimento em publicidade digital. Nós construímos
                landing pages otimizadas para conversão que ajudam você a capturar e nutrir leads,
                aumentando a taxa de conversão e gerando mais vendas para o seu negócio. Além disso,
                nosso atendimento é humanizado e voltado para o cliente, garantindo que você sempre
                se sinta ouvido e valorizado. Junte-se a nós e comece a acelerar seus negócios
                online hoje mesmo!
            </Texto>
        </SobreWrapper>
    );
}

export default Sobre;
