import { gql } from 'apollo-boost';
import { useSubscription } from '@apollo/react-hooks';


const POST_ADDED_SUBSCRIPTION = gql`
subscription PostAddedSubscription {
    postAdded {
        id
        title
    }
}
`;

export default function usePostAddedSubscription (options) {
    return useSubscription(POST_ADDED_SUBSCRIPTION, options);
};