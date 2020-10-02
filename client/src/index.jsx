import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";

ReactDOM.render(
  <AuthenticationContextProvider>
    <App />
  </AuthenticationContextProvider>,
  document.getElementById("root")
);
