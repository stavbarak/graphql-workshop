import Store from '../../store';

export const authorCreateResolver = (obj, args, req) => {
    return Store.createAuthor(args.input);
};

export default authorCreateResolver;
