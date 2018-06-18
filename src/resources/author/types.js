import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLInputObjectType,
    GraphQLList,
} from 'graphql';

export const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: {
        id: {
            type: GraphQLInt,
        },
        name: {
            type: GraphQLString,
        },
        company: {
            type: GraphQLString,
        },
    },
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
