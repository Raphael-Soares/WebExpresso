import styled from "styled-components";

const PortfolioWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    padding: 50px;
`;

const ProjetoCard = styled.div`
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    padding: 30px;
    text-align: center;
`;

const ProjetoTitulo = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 20px;
`;

const ProjetoDescricao = styled.p`
    font-size: 1.1rem;
    line-height: 1.5;
`;

const ProjetoImagem = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
`;

function Portfolio() {
    return (
        <PortfolioWrapper>
            <ProjetoCard>
                <ProjetoImagem
                    src="https://global-uploads.webflow.com/5f84417443f34a30444f52d3/63a4a465527844196f973cbe_Desktop%20-%20Company%20home-p-1080.webp"
                    alt="Projeto 1"
                />
                <ProjetoTitulo>Projeto 1</ProjetoTitulo>
                <ProjetoDescricao>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices massa non
                    elit feugiat bibendum.
                </ProjetoDescricao>
            </ProjetoCard>
            <ProjetoCard>
                <ProjetoImagem
                    src="https://global-uploads.webflow.com/5f84417443f34a30444f52d3/63a4a465527844196f973cbe_Desktop%20-%20Company%20home-p-1080.webp"
                    alt="Projeto 1"
                />
                <ProjetoTitulo>Projeto 2</ProjetoTitulo>
                <ProjetoDescricao>
                    Curabitur semper massa at turpis bibendum, non ullamcorper ipsum interdum.
                    Praesent a arcu id tellus consectetur eleifend.
                </ProjetoDescricao>
            </ProjetoCard>
            <ProjetoCard>
                <ProjetoImagem
                    src="https://global-uploads.webflow.com/5f84417443f34a30444f52d3/63a4a465527844196f973cbe_Desktop%20-%20Company%20home-p-1080.webp"
                    alt="Projeto 1"
                />
                <ProjetoTitulo>Projeto 3</ProjetoTitulo>
                <ProjetoDescricao>
                    Nulla facilisi. Nunc accumsan nibh eget lacus tincidunt, eget imperdiet arcu
                    bibendum. Maecenas euismod ultrices tortor, a luctus arcu elementum vel.
                </ProjetoDescricao>
            </ProjetoCard>
        </PortfolioWrapper>
    );
}

export default Portfolio;
