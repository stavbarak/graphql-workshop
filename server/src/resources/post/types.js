import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInputObjectType,
    GraphQLNonNull,
} from 'graphql';
import { AuthorType } from '../author/types';
import authorResolver from '../../resolvers/author/search';
import { GraphQLID } from 'graphql/type';

export const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
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
        votes: {
            type: GraphQLInt
        },
        author: {
            type: new GraphQLList(AuthorType),
            resolve: obj => authorResolver(obj, {id: obj.author}),
        },
    }),
});

export const PostUpvoteType = new GraphQLInputObjectType({
    name: 'PostUpvoteType',
    description: 'Post Upvote',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
});
