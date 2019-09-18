import React, { Component } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
