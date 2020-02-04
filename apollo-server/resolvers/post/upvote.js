import Store from '../../store';

export const PostUpvoteResolver = (obj, args, req) => {
    return Store.postUpvote(args);
};

export default PostUpvoteResolver;
