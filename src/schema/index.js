import { GraphQLSchema } from 'graphql';
import QueryType from '../resources/queries';
import MutationType from '../resources/mutations';

export default new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});
