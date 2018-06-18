import blogResolver from '../../resolvers/blog/search';
import { PostListType } from '../post/types';

export const BlogQuery = {
    blog: {
        type: PostListType,
        resolve: blogResolver,
    },
};
