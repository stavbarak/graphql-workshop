import { PubSub } from 'graphql-subscriptions';
import authorResolver from './author/search';
import authorCreateResolver from './author/create';
import postResolver from './post/search';

const AUTHOR_ADDED_TOPIC = 'newAuthor';
const pubsub = new PubSub();

const resolvers = {
    Query: {
      authors: authorResolver,
      posts: postResolver,
    },
    Mutation: {
        createAuthor: (obj, author, req) => {
            const created = authorCreateResolver(obj, author, req);
            pubsub.publish(AUTHOR_ADDED_TOPIC, { authorAdded: created });
            return created;
        },
    },
    Post: {
        author: post => authorResolver(global, {id: post.author}),
    },
    Subscription: {
        authorAdded: {
            subscribe: () => pubsub.asyncIterator(AUTHOR_ADDED_TOPIC),
        }
    }
};

export default resolvers;
