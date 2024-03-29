import styled from "styled-components";

const SobreLandingPagesWrapper = styled.div`
    width: 100%;
    padding-right: 5em;

    @media (max-width: 768px) {
        padding-right: 0;
    }
`;

const Titulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const Texto = styled.p`
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
`;

function SobreLandingPages() {
    return (
        <SobreLandingPagesWrapper>
            <Titulo>Por que Landing Pages são importantes para o seu negócio?</Titulo>
            <Texto>
                Landing Pages são uma poderosa ferramenta de marketing digital para pequenos
                negócios, pois permitem que você direcione o tráfego para uma oferta específica e
                incentive os visitantes a tomar uma ação desejada. Elas ajudam a aumentar a taxa de
                conversão e maximizar o retorno sobre o investimento em publicidade, além de
                fornecerem informações valiosas sobre o interesse e comportamento dos seus clientes
                potenciais.
            </Texto>
        </SobreLandingPagesWrapper>
    );
}

export default SobreLandingPages;
