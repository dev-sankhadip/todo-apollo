import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import { client } from './graphql/client'
import { Login } from './components/login'

class App extends React.Component
{
  state={
    isLoggedIn:''
  }


  render()
  {
    return(
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Login } />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App;
