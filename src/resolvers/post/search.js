import Store from '../../store';

const postResolver = (obj, args, req) => {
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

    return {
        items: posts,
    };
};

export default postResolver;
