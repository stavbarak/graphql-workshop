import Store from '../../store';

/**
 * if args.id - return author by id as list
 * else - return sll authors as list
 */
const authorResolver = (_, args, ctx) => {
    let authors;
    if (args.id) {
        authors = [Store.getAuthor(args.id)];
    } else {
        authors = Store.getAuthors();
    }

    return authors;
};

export default authorResolver;
