import React from "react";

import styled from "styled-components";

const Container = styled.form`
    display: flex;
    flex-direction: column;

    padding: 8vw;
`;

const Input = styled.input`
    border: none;
    border: 1px solid;

    border-radius: 5px;
    padding: 5px 10px;
`;

function Form() {
    return (
        <Container>
            <Input />
        </Container>
    );
}

export default Form;
