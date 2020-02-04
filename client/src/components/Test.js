import React from 'react';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const GET_AUTHORS = gql`
    query AuthorQuery ($authorId: Int) {
        author(id: $authorId) {
            id
            name
            company
        }
    }
`;

const Test = () => {
    const { loading, error, data } = useQuery(GET_AUTHORS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <ul>
        {data.author.map(author => (
            <li>{author.name}</li>
        ))}
      </ul>
    );
};

export default Test;