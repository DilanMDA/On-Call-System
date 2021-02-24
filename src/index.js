import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./utils/theme";
import GlobalStyle from "./utils/global";

ReactDOM.render(
  <BrowserRouter>
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </>
  </BrowserRouter>,
  document.getElementById("root")
);
