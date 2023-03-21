import { useState, useRef } from "react";
import emailjs from "emailjs-com";

import InputGroup from "../components/InputGroup";
import CheckGroup from "../components/CheckGroup";
import Alerta from "../components/Alerta";

import styled from "styled-components";

const serviceID = "service_amgsmvp";
const templateID = "template_a9k2w7v";
const userID = "W1NXJfm2l6E3WbKxh";

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

    const [alert, setAlert] = useState(false);

    const [form, setForm] = useState({
        nome: "",
        email: "",
        telefone: "",
        empresa: "",
        desc_empresa: "",
        capa_rotativa: false,
        servicos: false,
        portifolio: false,
        galeria: false,
        mapa: false,
        contato: false,
        wpp: false,
    });

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, formRef.current, userID).then(
            (result) => {
                console.log(result.text);
                showAlert();
            },
            (error) => {
                console.log(error.text);
            }
        );
    }

    function showAlert() {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 5000);
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.id]: e.target.value });
    }

    function handleCheck(e) {
        setForm({ ...form, [e.target.id]: e.target.checked });
    }

    return (
        <Container id="form" ref={formRef} onSubmit={handleSubmit}>
            <Row>
                <div>
                    <Subtitle>Solicite um orçamento para o seu site dos sonhos</Subtitle>
                    <InputGroup
                        id="nome"
                        label="Nome*"
                        required={true}
                        onChange={handleChange}
                        value={form.nome}
                    />

                    <InputGroup
                        id="email"
                        label="Email*"
                        required={true}
                        onChange={handleChange}
                        value={form.email}
                    />

                    <InputGroup
                        id="telefone"
                        label="Telefone*"
                        required={true}
                        value={form.telefone}
                        onChange={handleChange}
                    />

                    <InputGroup
                        id="empresa"
                        label="Nome da empresa"
                        required={true}
                        value={form.empresa}
                        onChange={handleChange}
                    />

                    <InputGroup
                        id="desc_empresa"
                        label="Descrição da empresa"
                        required={true}
                        value={form.desc_empresa}
                        onChange={handleChange}
                    />

                    <p> * Campos obrigatórios</p>
                </div>

                <div>
                    <Subtitle>O que você gostaria de ter na sua página?</Subtitle>

                    <CheckGroup
                        id="capa_rotativa"
                        label="Capa rotativa"
                        onChange={handleCheck}
                        value={form.capa_rotativa}
                    />
                    <CheckGroup
                        id="servicos"
                        label="Serviços oferecidos"
                        onChange={handleCheck}
                        value={form.servicos}
                    />

                    <CheckGroup
                        id="portifolio"
                        label="Portifolio"
                        onChange={handleCheck}
                        value={form.portifolio}
                    />
                    <CheckGroup
                        id="galeria"
                        label="Exibir uma galeria de fotos"
                        value={form.galeria}
                        onChange={handleCheck}
                    />
                    <CheckGroup
                        id="mapa"
                        label="Localização no mapa"
                        onChange={handleCheck}
                        value={form.mapa}
                    />
                    <CheckGroup
                        id="contato"
                        label="Formulário de orçamento"
                        value={form.contato}
                        onChange={handleCheck}
                    />
                    <CheckGroup id="wpp" label="Botão Whatsapp" onChange={handleCheck} />
                </div>
            </Row>

            {alert && <Alerta />}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "1rem",
                }}
            >
                <Button type="reset">Cancelar</Button>
                <Button type="submit">Enviar</Button>
            </div>
        </Container>
    );
}

export default Form;
