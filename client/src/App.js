import React from 'react';
import './App.css';
import { PostList } from './components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


function App() {
  return (
    <div className="App">
            <PostList />
    </div>
  );
}

export default App;
