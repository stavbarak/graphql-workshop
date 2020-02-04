import Store from '../../store';

export const PostUpvoteResolver = (obj, args, req) => {
    return Store.postUpvote(args.input);
};

export default PostUpvoteResolver;
