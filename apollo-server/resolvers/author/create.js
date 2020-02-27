import Store from '../../store';

/**
 * create new author
 */
export const authorCreateResolver = (obj, author, req) => {
    return Store.createAuthor(author);
};

export default authorCreateResolver;