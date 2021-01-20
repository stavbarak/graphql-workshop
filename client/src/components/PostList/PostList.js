import React, {useCallback, useState} from 'react';
import ThumbUp from '@material-ui/icons/ThumbUp';

import useGetPostListQuery from '../../hooks/useGetPostListQuery';
import usePostUpvoteMutation from '../../hooks/usePostUpvoteMutation';
import useCreatePostMutation from '../../hooks/useCreatePostMutation';
import usePostAddedSubscription from '../../hooks/usePostAddedSubscription';
import Styled from './styled-components';


const PostList = () => {
    const {
        loading,
        error,
        data,
        refetch: postListQueryRefetch,
    } = useGetPostListQuery();


    const {data: postAddedData, loading: postAddedLoading} = usePostAddedSubscription();

    const newPostTitle = postAddedData?.postAdded?.title;

    const listener = useCallback(() => {
        if (!postAddedLoading && newPostTitle) {
            window.alert(`New post added ${newPostTitle}`)
        }
    }, [newPostTitle, postAddedLoading])

    listener()

    const [postUpvote] = usePostUpvoteMutation(
        {
            onCompleted: () => {
                postListQueryRefetch();
            },
        }
    );
    const [createPost] = useCreatePostMutation(
        {
            onCompleted: () => {
                postListQueryRefetch();
            },
        }
    );
    const [title, setTitle] = useState('');
    const [votes, setVotes] = useState('');
    const [authorName, setAuthorName] = useState('');

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const {post} = data;

    const upVote = (postId) => {
        postUpvote({variables: {id: postId}});
    }


    const handleSubmit = (formEvent) => {
        formEvent.preventDefault();
        createPost({variables: {title, votes: parseInt(votes), authorName}});

    }

    return (
        <>
            <Styled.Container>
                {post.map(post => (
                    <Styled.Post key={post.id}>
                        <Styled.PostTitle>{post.title}</Styled.PostTitle>
                        <Styled.Author>
                            {post.author.map(author => (
                                <Styled.AuthorItem key={author.id}>{author.name}</Styled.AuthorItem>
                            ))}
                        </Styled.Author>
                        <Styled.PostVotes>Votes: {post.votes}</Styled.PostVotes>
                        <Styled.LikeButton color="primary" onClick={() => upVote(post.id)}>
                            <ThumbUp/>
                        </Styled.LikeButton>
                    </Styled.Post>
                ))}
            </Styled.Container>

            <form onSubmit={handleSubmit}>
                <label>
                    title:
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    votes:
                    <input
                        type="text"
                        value={votes}
                        onChange={e => setVotes(e.target.value)}
                    />
                </label>
                <label>
                    author:
                    <input
                        type="text"
                        value={authorName}
                        onChange={e => setAuthorName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
};

export default PostList;
