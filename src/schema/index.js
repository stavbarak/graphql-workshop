import { makeExecutableSchema } from 'graphql-tools';

import resolvers from '../resolvers';
import typeDefs from '../resources';

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;