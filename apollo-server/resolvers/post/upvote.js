import Store from '../../store';

/**
 *  increase post votes by 1
 */
export const PostUpvoteResolver = (obj, args, req) => {
    return Store.postUpvote(args);
};

export default PostUpvoteResolver;
