import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./GlobalStyles.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
