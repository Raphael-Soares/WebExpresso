import React from "react";
import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const FooterWrapper = styled.footer`
    background-color: #121212;
    color: #f5f1edff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const RedesSociaisWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const RedeSocialLink = styled.a`
    color: #f5f1edff;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover {
        color: #1da1f2;
    }
`;

function Footer() {
    return (
        <FooterWrapper>
            <p>&copy; 2023 Web Expresso</p>
            <RedesSociaisWrapper>
                <RedeSocialLink href="https://www.linkedin.com/company/web-expresso">
                    <AiFillLinkedin />
                </RedeSocialLink>
                <RedeSocialLink href="https://github.com/web-expresso">
                    <AiFillGithub />
                </RedeSocialLink>
            </RedesSociaisWrapper>
        </FooterWrapper>
    );
}

export default Footer;
