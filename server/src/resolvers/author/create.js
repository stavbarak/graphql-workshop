import Store from '../../store';

export const authorCreateResolver = (obj, author, req) => {
    return Store.createAuthor(author);
};

export default authorCreateResolver;
