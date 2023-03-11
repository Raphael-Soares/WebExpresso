import styled from "styled-components";

// importe as imagens
import landingPageImage from "../assets/landing-page.png";
import otimizacaoImage from "../assets/otimizacao.png";
import manutencaoImage from "../assets/manutencao.png";

const ServicosWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    padding: 50px;
`;

const ServicoCard = styled.div`
    background-color: #f5f1edff;
    color: #121212;
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 30px;
    text-align: center;
    overflow: hidden;
`;

const ServicoImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
`;

const ServicoTitulo = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const ServicoDescricao = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
`;

function Servicos() {
    return (
        <ServicosWrapper>
            <ServicoCard>
                <ServicoImg src={landingPageImage} alt="Landing Page Personalizada" />
                <ServicoTitulo>Landing Pages Personalizadas</ServicoTitulo>
                <ServicoDescricao>
                    Criamos Landing Pages personalizadas e otimizadas para conversão, de acordo com
                    as necessidades do seu negócio.
                </ServicoDescricao>
            </ServicoCard>
            <ServicoCard>
                <ServicoImg src={otimizacaoImage} alt="Otimização de Taxa de Conversão" />
                <ServicoTitulo>Otimização de Taxa de Conversão</ServicoTitulo>
                <ServicoDescricao>
                    Analisamos e otimizamos suas Landing Pages para garantir que elas gerem o máximo
                    de conversões possíveis.
                </ServicoDescricao>
            </ServicoCard>
            <ServicoCard>
                <ServicoImg src={manutencaoImage} alt="Manutenção e Suporte" />
                <ServicoTitulo>Manutenção e Suporte</ServicoTitulo>
                <ServicoDescricao>
                    Oferecemos serviços de manutenção e suporte para suas Landing Pages, garantindo
                    que elas estejam sempre funcionando corretamente e atualizadas.
                </ServicoDescricao>
            </ServicoCard>
        </ServicosWrapper>
    );
}

export default Servicos;
