import styled from "styled-components";

// importe as imagens
import landingPageImage from "../assets/landing-page.png";
import otimizacaoImage from "../assets/otimizacao.png";
import manutencaoImage from "../assets/manutencao.png";

import Card from "../components/Card";

const ServicosWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    padding: 5vw;
`;

function Servicos() {
    return (
        <ServicosWrapper>
            <Card
                image={landingPageImage}
                title="Landing Pages Personalizadas"
                text="Criamos Landing Pages personalizadas e otimizadas para conversão, de acordo com as necessidades do seu negócio."
            />

            <Card
                image={otimizacaoImage}
                title="Otimização de Taxa de Conversão"
                text="Analisamos e otimizamos suas Landing Pages para garantir que elas gerem o máximo de conversões possíveis."
            />

            <Card
                image={manutencaoImage}
                title="Manutenção e Suporte"
                text="Oferecemos serviços de manutenção e suporte para suas Landing Pages, garantindo que elas estejam sempre funcionando corretamente e atualizadas."
            />
        </ServicosWrapper>
    );
}

export default Servicos;
