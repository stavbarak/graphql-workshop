import Store from '../../store';

const blogResolver = () => {
    return {
        posts: Store.getPosts(),
    };
};

export default blogResolver;
