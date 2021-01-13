import Author from './Author';
import Post from './Post';
import Queries from './Queries';
import Mutations from './Mutations';
import Subscriptions from './Subscriptions';

const typeDefs = `
    ${Author},
    ${Post},
    ${Queries},
    ${Mutations},
    ${Subscriptions}
`;

export default typeDefs;
