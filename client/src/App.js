import React from 'react';
import './App.css';
import { PostList } from './components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    // gql express server
    uri: 'http://localhost:5000',
    // apollo server
    // uri: 'http://localhost:4000',
});

function App() {
  return (
    <div className="App">
        <ApolloProvider client={client}>
            <PostList />
        </ApolloProvider>
    </div>
  );
}

export default App;
