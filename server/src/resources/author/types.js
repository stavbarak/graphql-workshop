import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
    GraphQLList,
} from 'graphql';
import { PostType } from '../post/types';
import postResolver from '../../resolvers/post/search';

export const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString,
        },
        company: {
            type: GraphQLString,
        },
        post: {
            type: new GraphQLList(PostType),
            resolve: obj => postResolver(obj, {authorId: obj.id}),
        },
    }),
});

export const AuthorCreateType = new GraphQLInputObjectType({
    name: 'AuthorCreateType',
    description: 'author create',
    fields: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        company: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
});
