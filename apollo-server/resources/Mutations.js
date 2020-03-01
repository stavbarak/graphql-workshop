const Mutations = `
    # The mutation root type, used to define all mutations.
    type Mutation {
        createAuthor(name: String!, company: String!): Author
        postUpvote(id: Int!): Post
        createPost(title: String!, votes: Int!, authorName: String!): Post
    },
`;

export default Mutations;
