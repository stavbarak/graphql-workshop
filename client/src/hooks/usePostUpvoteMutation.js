import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const POST_UPVOTE = gql`
    mutation($id: Int!) {
        postUpvote (id: $id) {
            id
            title
            votes
        }
    }
`;

export default function usePostUpvoteMutation (options) {
    return useMutation(POST_UPVOTE, options);
};