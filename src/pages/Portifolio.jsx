import styled from "styled-components";
import Card from "../components/Card";

import Atena from "../assets/Atena.png";
import Dracflix from "../assets/dracflix.png";
import Dracdo from "../assets/dracdo.png";

const PortfolioWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 50px;
    padding: 5vw;
`;

function Portfolio() {
    return (
        <PortfolioWrapper>
            <Card
                image={Atena}
                title="Atena Condomínios"
                text="O site da Atena Condomínios apresenta seus serviços de administração de condomínios, consultoria e serviços administrativos. Há uma seção com imagens e descrições breves de serviços ofertados realizados pela empresa. O site é responsivo e permite contato através de formulário ou whatsapp."
            />
            <Card
                image={Dracflix}
                title="DracFlix"
                text="Bem-vindo à Dracflix, um projeto incrível de desenvolvimento front-end! Nós criamos uma interface primária inspirada na Netflix, com as cores do Dracula Theme para dar um ar moderno e sofisticado. 
                Embora não tenhamos um serviço real, esperamos que você tenha gostado da nossa interface!"
            />
            <Card
                image={Dracdo}
                title="DracDo"
                text="Aqui na DracDo, nossa lista de tarefas é perfeita para quem precisa se organizar e manter o controle de suas tarefas diárias. Com o Dracula Theme, nossa interface é moderna e elegante, tornando o gerenciamento de tarefas uma experiência mais agradável."
            />
        </PortfolioWrapper>
    );
}

export default Portfolio;
