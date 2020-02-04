import authorResolver from './author/search';
import authorCreateResolver from './author/create';
import postResolver from './post/search';
import postUpvoteResolver from './post/upvote';

const resolvers = {
    Query: {
      author: authorResolver,
      post: postResolver,
    },
    Mutation: {
        createAuthor: authorCreateResolver,
        postUpvote: postUpvoteResolver,
    },
    Post: {
        author: post => authorResolver(global, {id: post.author}),
    },
    Author: {
        post: author => postResolver(global, {authorId: author.id}),
    }
};

export default resolvers;