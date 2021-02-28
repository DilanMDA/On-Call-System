import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import theme from "./utils/theme";
import GlobalStyle from "./utils/global";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
