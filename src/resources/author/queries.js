import { GraphQLInt, GraphQLList } from 'graphql';
import { AuthorType } from './types';
import authorResolver from '../../resolvers/author/search';

export const AuthorQuery = {
    author: {
        resolve: authorResolver,
        args: {
            id: {
                type: GraphQLInt,
            },
        },
        type: new GraphQLList(AuthorType),
    },
};
