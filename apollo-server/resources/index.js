const typeDefs = `
    type Author {
        id: Int!
        name: String!
        company: String!
        post: [Post!]!
    }

    type Post {
        id: Int!
        categories: [String]
        publishDate: String
        summary: String
        tags: [String]
        votes: Int!
        title: String!
        author: [Author!]!
    }

    # This type specifies the entry points into our API.
    type Query {
        author(id: Int): [Author]
        post(id: Int, authorId: Int): [Post]
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
        createAuthor(name: String!, company: String!): Author
        postUpvote(id: Int!): Post
    }
`;

export default typeDefs;