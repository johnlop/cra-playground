import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "./components/pages/Routes";
import AuthProvider from "./components/providers/AuthProvider";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>{routes}</AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
