import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString
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
