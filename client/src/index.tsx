import React from "react";
import ReactDOM from "react-dom";
import ApolloProvider from "./utils/ApolloProvider";
import App from "./App";
import "./style/style.css";
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
