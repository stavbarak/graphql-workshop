import { GraphQLInt } from 'graphql';
import { PostListType } from './types';
import postResolver from '../../resolvers/post/search';

export const PostQuery = {
    post: {
        type: PostListType,
        args: {
            id: {
                type: GraphQLInt,
            },
            authorId: {
                type: GraphQLInt,
            }
        },
        resolve: postResolver,
    },
};
