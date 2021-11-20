import React from "react";
import ReactDOM from "react-dom";
import "./sass/global.scss";
import App from "./App";
import { VoteProvider } from "context/VoteContext";

ReactDOM.render(
  <React.StrictMode>
    <VoteProvider>
      <App />
    </VoteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
