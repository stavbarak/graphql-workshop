import Store from '../../store';

/**
 *
 * if args.id - return post by id as list
 * if args.authorId - return all posts by authorId
 * else return all posts
 */
const postResolver = (_, args, ctx) => {
    let posts;

    if (args.id) {
        posts = [Store.getPost(args.id)];
    }
    else if (args.authorId) {
        posts = Store.getAuthorPosts(args.authorId);
    }
    else {
        posts = Store.getPosts();
    }

    return posts;
};

export default postResolver;
