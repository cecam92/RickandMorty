import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./globalStyles.scss";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./components/reducers/RootReducer";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
});

const store = createStore(RootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
