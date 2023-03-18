import React from "react";

import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
`;

const Checkbox = styled.input`
    margin: 0 0.5rem;

    &:checked {
        background-color: #000;
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
`;

function CheckGroup({ id, label, required = false }) {
    return (
        <Container>
            <Checkbox id={id} name={id} type="checkbox" required={required} />
            <Label>{label}</Label>
        </Container>
    );
}

export default CheckGroup;
