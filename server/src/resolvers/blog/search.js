import Store from '../../store';

const blogResolver = () => {
    return Store.getPosts();
};

export default blogResolver;
