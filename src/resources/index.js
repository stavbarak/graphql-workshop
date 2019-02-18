const typeDefs = `
    type Author {
        id: Int
        name: String
        company: String
    }

    type Post {
        id: Int
        categories: [String]
        publishDate: String
        summary: String
        tags: [String]
        title: String
        author: [Author]
    }

    # This type specifies the entry points into our API.
    type Query {
        authors(id: Int): [Author]
        posts(id: Int, authorId: Int): [Post]
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
        createAuthor(name: String!, company: String!): Author
    }

    # The subscription root type, specifying what we can subscribe to
    type Subscription {
        authorAdded: Author
    }
`;

export default typeDefs;
