import { GraphQLSchema } from 'graphql';
import QueryType from '../resources/queries';

export default new GraphQLSchema({
    query: QueryType
});
