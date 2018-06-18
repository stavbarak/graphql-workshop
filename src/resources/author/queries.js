import { GraphQLInt } from 'graphql';
import { AuthorType } from './types';
import authorResolver from '../../resolvers/author/search';

export default {
    author: {
        type: AuthorType,
        args: {
            id: {
                type: GraphQLInt,
            }
        },
        resolve: authorResolver,
    }
}