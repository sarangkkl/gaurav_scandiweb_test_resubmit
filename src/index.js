import React from "react";
import ReactDOM from "react-dom/client";
import { BodyWrapper,ContentWrapper } from './Components/basicui/basicui'
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BodyWrapper>
          <ContentWrapper>
            <App />
          </ContentWrapper>
        </BodyWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
