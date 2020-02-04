import { GraphQLObjectType } from 'graphql';
import { AuthorCreateMutation } from './author/mutations';
import { PostUpvoteMutation } from './post/mutations';

const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'Top-level content mutations',
    fields: {
        ...AuthorCreateMutation,
        ...PostUpvoteMutation,
    },
});

export default MutationType;
