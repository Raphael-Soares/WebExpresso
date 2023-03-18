import { useState, useRef } from "react";
import emailjs from "emailjs-com";

import InputGroup from "../components/InputGroup";

import styled from "styled-components";
import CheckGroup from "../components/CheckGroup";

const Container = styled.form`
    display: flex;
    flex-direction: column;

    padding: 5vw;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    & > div {
        flex: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
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
`;

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
            <Row>
                <div>
                    <Subtitle>Solicite um orçamento para o seu site dos sonhos</Subtitle>
                    <InputGroup id="nome" label="Nome*" required={true} />
                    <InputGroup id="email" label="Email*" type="email" required={true} />
                    <InputGroup id="telefone" label="Telefone*" required={true} />
                    <InputGroup id="nome_empresa" label="Nome da empresa*" required={true} />
                    <InputGroup
                        id="desc_empresa"
                        label="Fale um pouco sobre a empresa*"
                        required={true}
                    />
                    <p> * Campos obrigatórios</p>
                </div>

                <div>
                    <Subtitle>O que você gostaria de ter na sua página?</Subtitle>

                    <CheckGroup id="capa_rotativa" label="Capa rotativa" />
                    <CheckGroup id="servicos" label="Serviços oferecidos" />

                    <CheckGroup id="portifolio" label="Portifolio" />
                    <CheckGroup id="galeria" label="Exibir uma galeria de fotos" />
                    <CheckGroup id="mapa" label="Localização no mapa" />
                    <CheckGroup id="contato" label="Formulário de orçamento" />
                    <CheckGroup id="wpp" label="Botão Whatssap" />
                </div>
            </Row>

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
