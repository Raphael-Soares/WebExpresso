import { useState, useRef } from "react";
import emailjs from "emailjs-com";

import styled from "styled-components";

const Container = styled.form`
    display: flex;
    flex-direction: column;

    padding: 5vw;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;
const Input = styled.input`
    border: none;
    border: 1px solid;

    border-radius: 5px;
    padding: 5px 10px;

    outline: none;

    &:focus {
        border-width: 2px;
    }
`;

const Button = styled.button`
    background-color: #0018f2;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;

    width: 100%;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #0013bb;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
        background-color: #6473f9;
    }

    &:active {
        background-color: #0013bb;
    }

    &:disabled:hover {
        background-color: #ccc;
    }
`;

const Label = styled.label`
    font-weight: 600;
`;

function InputGroup({ id, label, type = "text", required = false }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem",
            }}
        >
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} name={id} type={type} required={required} />
        </div>
    );
}

function Form() {
    const formRef = useRef();

    const serviceID = "service_amgsmvp";
    const templateID = "template_a9k2w7v";
    const userID = "W1NXJfm2l6E3WbKxh";

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, formRef.current, userID).then(
            (result) => {
                console.log(result.text);
                document.getElementById("form").reset();
                showAlert();
            },
            (error) => {
                console.log(error.text);
            }
        );

        // console.log(form);
    }

    return (
        <Container id="form" ref={formRef} onSubmit={handleSubmit}>
            <Title>Solicite um orçamento para o seu site dos sonhos</Title>

            <InputGroup id="nome" label="Nome" required={true} />
            <InputGroup id="email" label="Email" type="email" required={true} />
            <InputGroup id="telefone" label="Telefone" required={true} />
            <InputGroup id="nome_empresa" label="Nome da empresa" required={true} />
            <InputGroup id="desc_empresa" label="Descrição da empresa" required={true} />

            <p>Todos os campos são obrigatórios</p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                }}
            >
                <Button type="reset">Cancelar</Button>
                <Button type="submit">Solicitar orçamento</Button>
            </div>
        </Container>
    );
}

export default Form;
