const Author = `
    type Author {
        id: Int!
        name: String!
        company: String!
        post: [Post!]!
    }
`;

export default Author;
