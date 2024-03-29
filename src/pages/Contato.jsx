import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";

const ContactContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #f5f1edff;
    padding: 20px 5vw;

    @media (max-width: 768px) {
        padding: 20px 10px;
    }
`;

const ContactItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    color: #666;
    margin-right: 30px;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const ContactLink = styled.a`
    display: flex;
    align-items: center;
    color: #666;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: #0018f2;
    }
`;

const ContactIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0018f2;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

function Contato() {
    return (
        <ContactContainer>
            <ContactItem>
                <ContactLink href="mailto:raphaelsoares.dev@gmail.com">
                    <ContactIcon>
                        <FaEnvelope />
                    </ContactIcon>
                    raphaelsoares.dev@gmail.com
                </ContactLink>
            </ContactItem>

            <ContactItem>
                <ContactLink href="tel:+5547997301224">
                    <ContactIcon>
                        <FaPhone />
                    </ContactIcon>
                    (47) 99730-1224
                </ContactLink>
            </ContactItem>

            <ContactItem>
                <ContactLink
                    href="https://www.instagram.com/web.expresso"
                    target="_blank"
                    rel="noreferrer"
                >
                    <ContactIcon>
                        <FaInstagram />
                    </ContactIcon>
                    @web.expresso
                </ContactLink>
            </ContactItem>
        </ContactContainer>
    );
}

export default Contato;
