import React from "react";

import logo from "../assets/logodark.svg";

import styled from "styled-components";

const Container = styled.div`
    background-color: #f5f1edff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: bold;
    padding: 0 5dvw;
    gap: 10%;

    font-family: "Courier New", Courier, monospace;
`;

const Logo = styled.img`
    width: 15%;
`;

const Menu = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;

    /* border: solid 1px; */
`;

const MenuItem = styled.div`
    color: #151515;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
`;

const MenuButton = styled.button`
    background-color: #f5f1edff;
    border: solid 1px #121212;
    border-radius: 50px;

    width: 200px;

    padding: 10px 20px;

    color: #121212;
    cursor: pointer;
    font-size: 16px;

    font-family: "Courier New", Courier, monospace;
`;

function Navbar() {
    return (
        <Container>
            <Logo src={logo} />
            <Menu>
                <MenuItem href="#">Sobre nós</MenuItem>
                <MenuItem href="#">Serviços</MenuItem>
                <MenuItem href="#">Portifólio</MenuItem>
                <MenuItem href="#">Depoimentos</MenuItem>
                <MenuItem href="#">Preços</MenuItem>
                <MenuItem href="#">Contato</MenuItem>
            </Menu>
            <MenuButton>Pedir orçamento</MenuButton>
        </Container>
    );
}

export default Navbar;
