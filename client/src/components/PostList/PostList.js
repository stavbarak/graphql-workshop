import React from 'react';
import { loader } from 'graphql.macro';
import { useQuery, useMutation } from '@apollo/react-hooks';
import ThumbUp from '@material-ui/icons/ThumbUp';

import Styled from './styled-components';

const getPostListQuery = loader('./graphql/GetPostList.graphql');
const postUpvoteMutation = loader('./graphql/PostUpvote.graphql');

const PostList = () => {
    const {
        loading,
        error,
        data,
        refetch: refetchPostList
    } = useQuery(getPostListQuery);

    const [postUpvote] = useMutation(
        postUpvoteMutation,
        {
            refetchQueries: [
                {
                    query: getPostListQuery
                }
            ],
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
                <Styled.Post>
                    <Styled.PostTitle>{post.title}</Styled.PostTitle>
                    <Styled.Author>
                        {post.author.map(author => (
                            <Styled.AuthorItem>{author.name}</Styled.AuthorItem>
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