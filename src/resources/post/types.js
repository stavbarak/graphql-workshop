import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from 'graphql';
import { AuthorType } from '../author/types';
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
            type: AuthorType,
            resolve: (obj) => {
                const authorId = obj.author.split("/")[1];
                return authorResolver(obj, {id: authorId});
            }
        }
    },
});

export const PostListType = new GraphQLObjectType({
    name: 'PostListType',
    description: 'List of posts',
    fields: {
        posts: {
            type: new GraphQLList(PostType),
        },
    },
});
