import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: arial, sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
