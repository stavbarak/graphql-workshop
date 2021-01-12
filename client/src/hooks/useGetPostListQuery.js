import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_POST_LIST = gql`
    query PostListQuery {
        post {
            id
            title
            votes
            author {
                id
                name
            }
        }
    }
`;

export default function useGetPostListQuery () {
    return useQuery(GET_POST_LIST);
};