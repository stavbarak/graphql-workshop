import { GraphQLInt } from 'graphql';
import { PostType } from './types';
import postResolver from '../../resolvers/post/search';

export default {
    post: {
        type: PostType,
        args: {
            id: {
                type: GraphQLInt,
            }
        },
        resolve: postResolver,
    }
}