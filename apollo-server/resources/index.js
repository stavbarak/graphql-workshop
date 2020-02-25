import Author from './Author';
import Post from './Post';
import Queries from './Queries';
import Mutations from './Mutations';

const typeDefs = `
    ${Author},
    ${Post},
    ${Queries},
    ${Mutations},
`;

export default typeDefs;