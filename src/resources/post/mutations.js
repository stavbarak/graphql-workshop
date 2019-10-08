import { PostType, PostUpvoteType } from './types';
import PostUpvoteResolver from '../../resolvers/post/upvote';

export const PostUpvoteMutation = {
    postUpvote: {
        type: PostType,
        description: 'Post Upvote',
        args: {
            input: {
                type: PostUpvoteType,
            },
        },
        resolve: PostUpvoteResolver,
    },
};
