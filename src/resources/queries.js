import { GraphQLObjectType } from 'graphql';
import { AuthorQuery } from './author/queries';
import { PostQuery } from './post/queries';
import { BlogQuery } from './blog/queries';

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Top-level content queries',
    fields: {
        ...AuthorQuery,
        ...PostQuery,
        ...BlogQuery,
    },
});

export default QueryType;
