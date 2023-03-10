import React from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    flex: 1;
`;

function App() {
    return (
        <Container>
            <Navbar />
            <Header />
        </Container>
    );
}

export default App;
