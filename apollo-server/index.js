import { ApolloServer } from 'apollo-server';
import depthLimit from 'graphql-depth-limit'
import resolvers from './resolvers';
import typeDefs from './resources';
import { PubSub } from 'apollo-server';

const validationRules = [
    depthLimit(3),
];

const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules,
    context: {
        pubSub: new PubSub(),
        topics: {
            POST_ADDED: 'post_added'
        }
    }
});

server.listen().then(({ url, subscriptionsUrl }) => {
    console.log(`🚀  Server ready at ${url}`);
    console.log(`🚀 Subscriptions ready at ${subscriptionsUrl}`);
});

