/** @format */

import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { getAccessToken } from "./pages/accessToken";
import { setContext } from "@apollo/client/link/context";
import { App } from "./App";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `bearer ${token}`,
      },
    };
  }
});

const client = new ApolloClient({
  // uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
