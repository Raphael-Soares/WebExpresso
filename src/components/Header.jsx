import React from "react";
import styled from "styled-components";
import header from "../assets/header.png";

const Container = styled.div`
    height: 90dvh;

    background-color: #f5f1edff;

    padding-top: 10vh;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 50%;
`;
function Header() {
    return (
        <Container>
            <HeaderContainer></HeaderContainer>
        </Container>
    );
}

export default Header;
