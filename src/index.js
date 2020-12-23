import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootswatch/dist/journal/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./components/appContext";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
