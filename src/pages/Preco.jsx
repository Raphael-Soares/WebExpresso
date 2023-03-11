import styled from "styled-components";

const PrecoWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    padding: 50px;
`;

const PrecoCard = styled.div`
    background-color: #f5f1edff;
    color: #121212;
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 30px;
    text-align: center;
`;

const PrecoTitulo = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const PrecoDescricao = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 20px;
`;

const PrecoPreco = styled.h4`
    font-size: 2rem;
    margin-bottom: 20px;
`;

const PrecoBotao = styled.button`
    background-color: #121212;
    color: #f5f1edff;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #f5f1edff;
        color: #121212;
    }
`;

function Preco() {
    return (
        <PrecoWrapper>
            <PrecoCard>
                <PrecoTitulo>Plano Básico</PrecoTitulo>
                <PrecoDescricao>
                    Ideal para pequenos negócios que precisam de uma Landing Page simples e efetiva.
                </PrecoDescricao>
                <PrecoPreco>R$ 99,90/mês</PrecoPreco>
                <PrecoBotao>Comprar</PrecoBotao>
            </PrecoCard>
            <PrecoCard>
                <PrecoTitulo>Plano Avançado</PrecoTitulo>
                <PrecoDescricao>
                    Para negócios que precisam de uma Landing Page mais elaborada, com
                    funcionalidades avançadas.
                </PrecoDescricao>
                <PrecoPreco>R$ 199,90/mês</PrecoPreco>
                <PrecoBotao>Comprar</PrecoBotao>
            </PrecoCard>
            <PrecoCard>
                <PrecoTitulo>Plano Premium</PrecoTitulo>
                <PrecoDescricao>
                    Para negócios que precisam de uma Landing Page personalizada e com suporte
                    dedicado.
                </PrecoDescricao>
                <PrecoPreco>R$ 499,90/mês</PrecoPreco>
                <PrecoBotao>Comprar</PrecoBotao>
            </PrecoCard>
        </PrecoWrapper>
    );
}

export default Preco;
