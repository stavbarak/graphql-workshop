import Store from '../../store';

const authorResolver = (obj, args, req) => {
    let authors;
    if (args.id) {
        authors = [Store.getAuthor(args.id)];
    } else {
        authors = Store.getAuthors();
    }

    return {
        items: authors,
    }
};

export default authorResolver;
