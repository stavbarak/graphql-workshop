import blogResolver from '../../resolvers/blog/search';
import { PostListType } from '../post/types';

export default {
    blog: {
        type: PostListType,
        resolve: blogResolver,
    }
}