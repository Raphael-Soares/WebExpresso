import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
    background-color: #f9f9f9;

    border-radius: 10px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 200px;

    object-fit: cover;
    border-radius: 10px 10px 0 0;
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d2d2dff;
    margin: 1rem;
`;

const CardText = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #2d2d2dff;
    margin: 1rem;
`;

function Card({ image, title, text }) {
    return (
        <CardWrapper>
            <CardImage src={image} />
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
        </CardWrapper>
    );
}

export default Card;
