import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const POST_CREATE = gql`
    mutation ($title: String!, $votes: Int!, $authorName: String!) {
    createPost(title: $title, votes: $votes, authorName: $authorName) {
        id
        categories
        publishDate
        votes
        title
        author {
            name
            company
        }
    }
    }
`;

export default function useCreatePostMutation (options) {
    return useMutation(POST_CREATE, options);
};