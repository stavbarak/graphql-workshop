import Store from '../../store';


/**
 * create new author
 */
export const postCreateResolver = (obj, post, req) => {
    console.log(post);

    const authorList = Store.getAuthors()
        .filter(author => author.name === post.authorName);

    let author;
    console.log(authorList);


    if (authorList.length === 0) {
        const tempAuthor = {
            name: post.authorName,
            company: "my corp",
        }
        author = Store.createAuthor(tempAuthor);
    } else {
        author = authorList[0];
    }

    const postToCreate = Object.assign({}, post, {
        author: author.id,
    });

    delete postToCreate.authorCompany;
    delete postToCreate.authorName;

    
    const postCreated = Store.createPost(postToCreate);
    req.pubSub.publish(req.topics.POST_ADDED, { postCreated });
    return postCreated;
};

export default postCreateResolver;