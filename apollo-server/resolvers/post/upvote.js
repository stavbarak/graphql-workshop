import Store from '../../store';

/**
 *  increase post votes by 1
 */
export const PostUpvoteResolver = (_, args, ctx) => {
    return Store.postUpvote(args);
};

export default PostUpvoteResolver;
