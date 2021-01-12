const posts = {
  "234": {
    id: 234,
    author: 2,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:01",
    summary: "...",
    tags: ["GraphQl", "API"],
    title: "Contemporary API Design",
    votes: 0
  },
  "456": {
    id: 456,
    author: 4,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:02",
    summary: "...",
    tags: ["Redux", "React", "redux-little-router"],
    title: "Let The URL Do The Talking",
    votes: 0
  },
  "17": {
    id: 17,
    author: 7,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:03",
    summary: "...",
    tags: ["HTTP/2", "Interlock", "compilers"],
    title: "HTTP/2 Server Push",
    votes: 0
  },
  "872": {
    id: 872,
    author: 4,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:04",
    summary: "...",
    tags: ["React", "Freactal", "state management"],
    title: "Don't Fear The Fractal: Infinite State Composition With Freactal",
    votes: 0
  },
  "642": {
    id: 642,
    author: 8,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:05",
    summary: "...",
    tags: ["OSS", "documentation", "design"],
    title: "Your Docs And You: A Guide For Your First OSS Portfolio",
    votes: 0
  },
  "56": {
    id: 56,
    author: 7,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:06",
    summary: "...",
    tags: ["React", "Rapscallion", "server side rendering"],
    title: "Faster React SSR With Rapscallion",
    votes: 0
  },
  "21": {
    id: 21,
    author: 9,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:07",
    summary: "...",
    tags: ["OSS", "career"],
    title: "On Releasing My First OSS Project At Thirty-Five",
    votes: 0
  },
  "73": {
    id: 73,
    author: 9,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:08",
    summary: "...",
    tags: ["Node", "performance", "monitoring"],
    title: "Introducing NodeJS-Dashboard",
    votes: 0
  },
  "943": {
    id: 943,
    author: 4,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:09",
    summary: "...",
    tags: ["React", "redux-little-router", "routers"],
    title: "Introducing Nested Routing In Redux Little Router",
    votes: 0
  },
  "856": {
    id: 856,
    author: 4,
    categories: ["Software Engineering"],
    publishDate: "2016/03/27 14:10",
    summary: "...",
    tags: ["Browsers", "HTTP"],
    title: "The Only Correct Script Loader Ever Made",
    votes: 0
  }
};

const authors = {
  "2": {
    id: 2,
    name: "Eric Baer",
    company: "Formidable"
  },
  "4": {
    id: 4,
    name: "Tyler Thompson",
    company: "Formidable"
  },
  "7": {
    id: 7,
    name: "Dale Bustad",
    company: "Formidable"
  },
  "8": {
    id: 8,
    name: "Paula Lavalle",
    company: "Formidable"
  },
  "9": {
    id: 9,
    name: "Jason Wilson",
    company: "Formidable"
  },
  "10": {
    id: 10,
    name: "Emma Brillhart",
    company: "Formidable"
  }
};


const getPosts = () => Object.keys(posts).map(key => posts[key]);
const getPost = (id) => posts[id];
const getAuthors = () => Object.keys(authors).map(key => authors[key]);
const getAuthor = (id) => authors[id];
const getAuthorPosts = (authorId) => {
    const r = Object.values(posts)
        .filter(post => post.author === authorId);
    return r;
};
const createAuthor = (author) => {
    const id = Object.values(authors)
        .map(author => author.id)
        .reduce((acc, id) => id > acc ? id : acc, 0);
    const authorToCreate = Object.assign({}, author, {
        id: id + 1,
    });
    authors[authorToCreate.id] = authorToCreate;
    return authorToCreate;
};
const postUpvote = ({id}) => {
    const post = getPost(id);
    const postToUpvote = Object.assign({}, post, {
        votes: post.votes + 1,
    });
    posts[id] = postToUpvote;
    return postToUpvote;
}

export default {
    getPost,
    getPosts,
    getAuthor,
    getAuthorPosts,
    getAuthors,
    createAuthor,
    postUpvote,
}
