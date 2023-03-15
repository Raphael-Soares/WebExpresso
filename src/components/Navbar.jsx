import { useState } from "react";

import logo from "../assets/logodark.svg";

import styled from "styled-components";

import { AiOutlineMenu } from "react-icons/ai";

const Container = styled.nav`
    background-color: #f5f1edff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-weight: bold;
    padding: 0 5dvw;
    gap: 10%;

    font-family: "Courier New", Courier, monospace;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Logo = styled.img`
    width: 10em;
`;

const Menu = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        width: 100%;
    }
`;

const MenuItem = styled.div`
    color: #151515;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 768px) {
        margin: 10px 0;
        font-family: "Helvetica", sans-serif;
        font-size: 18px;
    }
`;

const MenuButton = styled.button`
    background-color: #f5f1edff;
    border: solid 1px #121212;
    border-radius: 50px;

    width: 30em;

    padding: 10px 20px;

    color: #121212;
    cursor: pointer;
    font-size: 16px;

    font-family: "Courier New", Courier, monospace;

    @media (max-width: 768px) {
        margin: 1em;
        width: 100%;
    }
`;

function Navbar() {
    const windowWidth = window.innerWidth;
    const [menuOpen, setMenuOpen] = useState(windowWidth > 768 ? true : false);

    return (
        <Container>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                    width: windowWidth > 768 ? "50%" : "100%",
                }}
            >
                <Logo src={logo} />

                <AiOutlineMenu
                    size="2em"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: windowWidth > 768 ? "none" : "block",
                    }}
                />
            </div>

            {menuOpen && (
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Portfolio</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            )}
            <MenuButton>Pedir orçamento</MenuButton>
        </Container>
    );
}

export default Navbar;
