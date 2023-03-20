import React from "react";
import styled from "styled-components";

const SobreWrapper = styled.div`
    margin: 0 auto;
    padding: 5vw;
    background-color: #f5f1edff;
`;

const Titulo = styled.h2`
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: 20px;
`;

const Texto = styled.p`
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    line-height: 1.5;
    color: #4b4b4b;
`;

const Destaque = styled.span`
    color: #0018f2;
    font-weight: 700;
    text-decoration: underline;
`;

function Sobre() {
    return (
        <SobreWrapper>
            <Titulo>Web Expresso: Acelerando seus negócios online</Titulo>
            <Texto>
                Na Web Expresso, acreditamos que toda empresa merece ter uma presença online forte e
                eficaz. É por isso que oferecemos serviços personalizados e acessíveis para ajudá-lo
                a maximizar seu retorno sobre o investimento em publicidade digital. Nós construímos{" "}
                <Destaque>landing pages</Destaque> otimizadas para conversão que ajudam você a
                capturar e nutrir leads, aumentando a taxa de conversão e gerando mais vendas para o
                seu negócio. Além disso, nosso atendimento é humanizado e voltado para o cliente,
                garantindo que você sempre se sinta ouvido e valorizado. Junte-se a nós e comece a
                acelerar seus negócios online hoje mesmo!
            </Texto>
        </SobreWrapper>
    );
}

export default Sobre;
