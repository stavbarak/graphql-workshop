import { GraphQLInt } from 'graphql';
import { AuthorListType } from './types';
import authorResolver from '../../resolvers/author/search';

export const AuthorQuery = {
    author: {
        type: AuthorListType,
        args: {
            id: {
                type: GraphQLInt,
            },
        },
        resolve: authorResolver,
    },
};
