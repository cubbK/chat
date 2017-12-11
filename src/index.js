import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'semantic-ui-css/semantic.min.css'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink}  from 'apollo-link-ws';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getOperationAST } from 'graphql';

const httpUri = 'https://api.graph.cool/simple/v1/cjazvbwl50gc90192tpmgze5p';
const wsUri = 'wss://subscriptions.graph.cool/v1/cjazvbwl50gc90192tpmgze5p';

const link = ApolloLink.split(
  operation => {
    const operationAST = getOperationAST(operation.query, operation.operationName);
    return !!operationAST && operationAST.operation === 'subscription';
  },
  new WebSocketLink({
    uri: wsUri,
    options: {
      reconnect: true, //auto-reconnect
      // // carry login state (should use secure websockets (wss) when using this)
      // connectionParams: {
      //   authToken: localStorage.getItem("Meteor.loginToken")
      // }
    }
  }),
  new HttpLink({ uri: httpUri })
);

const cache = new InMemoryCache(window.__APOLLO_STATE);

const client = new ApolloClient({
  link,
  cache
});

ReactDOM.render(
<ApolloProvider client={client} >
      <App />
</ApolloProvider>, document.getElementById('root'))
