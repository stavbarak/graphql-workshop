import Store from '../../store';

const postResolver = (obj, args, req) => {
    return Store.getPost(args.id);
};

export default postResolver;
