import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootswatch/dist/journal/bootstrap.min.css";
import { StateProvider } from './components/appContext'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
