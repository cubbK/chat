import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'semantic-ui-css/semantic.min.css'

import ApolloClient from 'apollo-client'
import { HttpLink, InMemoryCache } from 'apollo-client-preset'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjazvbwl50gc90192tpmgze5p' }),
  cache: new InMemoryCache().restore({})
})

ReactDOM.render(
<ApolloProvider client={client} >
      <App />
</ApolloProvider>, document.getElementById('root'))
