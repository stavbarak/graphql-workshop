import { GraphQLObjectType } from 'graphql';
import { AuthorCreateMutation } from './author/mutations';

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Top-level content mutations',
    fields: {
        ...AuthorCreateMutation
    },
});

export default MutationType;
