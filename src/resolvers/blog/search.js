import Store from '../../store';

const blogResolver = () => {
    return {
        items: Store.getPosts(),
    };
};

export default blogResolver;
