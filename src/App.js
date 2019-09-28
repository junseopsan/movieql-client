import React, { Component } from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { HashRouter as Router, Route } from "react-router-dom";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <main>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:movieId"} component={Detail} />
          </main>
        </Router>
        <GlobalStyles />
      </ApolloProvider>
    );
  }
}

export default App;
