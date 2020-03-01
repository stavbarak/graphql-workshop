import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './resources';

const validationRules = [
    depthLimit(3),
];

const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules,
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
