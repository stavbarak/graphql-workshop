import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
    GraphQLList,
} from 'graphql';
import { PostListType } from '../post/types';
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
            type: PostListType,
            resolve: obj => postResolver(obj, {authorId: obj.id}),
        },
    }),
});

export const AuthorListType = new GraphQLObjectType({
    name: 'AuthorListType',
    description: 'List of authors',
    fields: {
        items: {
            type: new GraphQLList(AuthorType),
        },
    },
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
