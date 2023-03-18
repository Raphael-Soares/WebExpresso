import React from "react";

import styled from "styled-components";

const Container = styled.div`
    padding: 1rem;
    background-color: #e6ffe6;
    border-radius: 5px;
    margin-bottom: 1rem;
`;

function Alerta() {
    return (
        <Container>
            <span
                style={{
                    fontWeight: "bold",
                }}
            >
                Sua solicitção foi enviada!
            </span>{" "}
            Entraremos em contato em breve.
        </Container>
    );
}

export default Alerta;
