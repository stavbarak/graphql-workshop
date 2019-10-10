import { GraphQLList } from 'graphql';
import blogResolver from '../../resolvers/blog/search';
import { PostType } from '../post/types';

export const BlogQuery = {
    blog: {
        type: new GraphQLList(PostType),
        resolve: blogResolver,
    },
};
