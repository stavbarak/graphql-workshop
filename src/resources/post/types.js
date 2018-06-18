import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from 'graphql';
import { AuthorListType } from '../author/types';
import authorResolver from '../../resolvers/author/search';

export const PostType = new GraphQLObjectType({
    name: "Post",
    fields: {
        id: {
            type: GraphQLInt,
        },
        categories: {
            type: new GraphQLList(GraphQLString),
        },
        publishDate: {
            type: GraphQLString,
        },
        summary: {
            type: GraphQLString,
        },
        tags: {
            type: new GraphQLList(GraphQLString),
        },
        title: {
            type: GraphQLString,
        },
        author: {
            type: AuthorListType,
            resolve: obj => authorResolver(obj, {id: obj.author}),
        },
    },
});

export const PostListType = new GraphQLObjectType({
    name: 'PostListType',
    description: 'List of posts',
    fields: {
        items: {
            type: new GraphQLList(PostType),
        },
    },
});
