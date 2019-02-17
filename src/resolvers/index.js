import authorResolver from './author/search';
import authorCreateResolver from './author/create';
import postResolver from './post/search';

const resolvers = {
    Query: {
      authors: authorResolver,
      posts: postResolver,
    },
    Mutation: {
        createAuthor: authorCreateResolver,
    },
    Post: {
        author: post => authorResolver(global, {id: post.author}),
    },
};

export default resolvers;
