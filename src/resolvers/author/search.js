import Store from '../../store';

const authorResolver = (obj, args, req) => {
    return Store.getAuthor(args.id);
};

export default authorResolver;
