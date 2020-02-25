const Post = `
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
`;

export default Post;
