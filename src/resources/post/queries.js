import { GraphQLInt, GraphQLList } from 'graphql';
import { PostType } from './types';
import postResolver from '../../resolvers/post/search';

export const PostQuery = {
    post: {
        type: new GraphQLList(PostType),
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
