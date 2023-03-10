import React from "react";

import styled from "styled-components";

import logo from "../assets/logodark.svg";

const Container = styled.div`
    background-color: #f5f1edff;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 10vh;

    width: 100vw;
    padding: 0 8vw;
    /* border: 10px solid; */
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    width: 15%;
`;

const MenuItem = styled.div`
    color: #121212;

    padding: 0 1vw;
    cursor: pointer;
`;

function Navbar() {
    return (
        <Container>
            <Logo src={logo} />
            <Menu>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem>Contact</MenuItem>
            </Menu>
        </Container>
    );
}

export default Navbar;
