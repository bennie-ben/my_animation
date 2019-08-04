import React, { Component }from 'react';
import {ApolloProvider} from 'react-apollo';
import client from "./Apollo";
import Router from "./Router";
import "./App.css";

class App extends Component{
  render(){
    return(
      <ApolloProvider client={client}>
        <div className="tired">
          <Router/>
        </div>
      </ApolloProvider>
    )
  }
}


export default App;
