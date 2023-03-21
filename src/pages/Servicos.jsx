import styled from "styled-components";
import { motion } from "framer-motion";

// importe as imagens
import landingPageImage from "../assets/landing-page.png";
import otimizacaoImage from "../assets/otimizacao.png";
import manutencaoImage from "../assets/manutencao.png";

import Card from "../components/Card";

const ServicosWrapper = styled(motion.div)`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    padding: 5vw;
`;

const ServicosTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    color: #2d2d2dff;
    margin-bottom: 2rem;
`;

const cards = [
    {
        id: 1,
        image: landingPageImage,
        title: "Landing Pages Personalizadas",
        text: "Criamos Landing Pages personalizadas e otimizadas para conversão, de acordo com as necessidades do seu negócio.",
    },
    {
        id: 2,
        image: otimizacaoImage,
        title: "Otimização de Taxa de Conversão",
        text: "Analisamos e otimizamos suas Landing Pages para garantir que elas gerem o máximo de conversões possíveis.",
    },
    {
        id: 3,
        image: manutencaoImage,
        title: "Manutenção e Suporte",
        text: "Oferecemos serviços de manutenção e suporte para suas Landing Pages, garantindo que elas estejam sempre funcionando corretamente e atualizadas.",
    },
];

function Servicos() {
    return (
        <>
            {/* <ServicosTitle>Conheça nossos serviços</ServicosTitle> */}
            <ServicosWrapper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </ServicosWrapper>
        </>
    );
}

export default Servicos;
