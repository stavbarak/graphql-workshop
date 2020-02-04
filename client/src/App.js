import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'http://localhost:5000',
});

function App() {
  return (
    <div className="App">
        <ApolloProvider client={client}>
            <Test />
        </ApolloProvider>
    </div>
  );
}

export default App;
