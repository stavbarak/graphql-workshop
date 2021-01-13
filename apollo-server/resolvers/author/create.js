import Store from '../../store';

/**
 * create new author
 */
export const authorCreateResolver = (_, author, ctx) => {
    return Store.createAuthor(author);
};

export default authorCreateResolver;
