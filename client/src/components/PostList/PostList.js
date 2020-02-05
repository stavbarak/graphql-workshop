import React from 'react';
import ThumbUp from '@material-ui/icons/ThumbUp';

import useGetPostListQuery from '../../hooks/useGetPostListQuery';
import usePostUpvoteMutation from '../../hooks/usePostUpvoteMutation';
import Styled from './styled-components';

const PostList = () => {
    const {
        loading,
        error,
        data,
        refetch: postListQueryRefetch,
    } = useGetPostListQuery();
    const [postUpvote] = usePostUpvoteMutation(
        {
            onCompleted: () => {
                postListQueryRefetch();
            },
        }
    );

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const { post } = data;

    const upVote = (postId) => {
        postUpvote({ variables: { id: postId }});
    }

    return (
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
                        <ThumbUp />
                    </Styled.LikeButton>
                </Styled.Post>
            ))}
        </Styled.Container>
    );
};

export default PostList;