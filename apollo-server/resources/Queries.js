const Queries = `
    # This type specifies the entry points into our API.
    type Query {
        author(id: Int): [Author]
        post(id: Int, authorId: Int): [Post]
    }
`;

export default Queries;
