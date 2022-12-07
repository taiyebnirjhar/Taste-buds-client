import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthFireContext from "./Contexts/AuthFireContext";
// import Authcontext from "./Contexts/Authcontext";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthFireContext>
      <App />
    </AuthFireContext>
  </React.StrictMode>
);
