import { AuthorType, AuthorCreateType } from './types';
import authorCreateResolver from '../../resolvers/author/create';

export const AuthorCreateMutation = {
    createAuthor: {
        type: AuthorType,
        description: 'Create author',
        args: {
            input: {
                type: AuthorCreateType,
            },
        },
        resolve: authorCreateResolver,
    },
};
