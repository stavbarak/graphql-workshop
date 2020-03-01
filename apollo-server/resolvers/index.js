import authorResolver from './author/search';
import authorCreateResolver from './author/create';
import postResolver from './post/search';
import postUpvoteResolver from './post/upvote';
import postCreateResolver from './post/create';

const resolvers = {
    Query: {
        author: authorResolver,
        post: postResolver,
      },
      Mutation: {
          createAuthor: authorCreateResolver,
          postUpvote: postUpvoteResolver,
          createPost: postCreateResolver,
      },
      Post: {
          author: post => authorResolver(global, {id: post.author}),
      },
      Author: {
          post: author => postResolver(global, {authorId: author.id}),
      }};

export default resolvers;