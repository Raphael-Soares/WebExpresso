import React, { memo, useState, useEffect } from "react";
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
    height: auto;
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

const PlaceholderImage = styled.div`
    width: 100%;
    height: 200px;
    background-color: #c4c4c4;
    border-radius: 10px 10px 0 0;
`;

function Card({ image, title, text }) {
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = image;
        imageLoader.onload = () => setImageLoaded(true);
    }, [image]);

    return (
        <CardWrapper>
            {imageLoaded ? <CardImage src={image} alt={title} /> : <PlaceholderImage />}
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
        </CardWrapper>
    );
}

export default memo(Card);
