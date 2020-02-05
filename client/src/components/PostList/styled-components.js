import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const Author = styled.div`
`;

const Post = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    padding: 0.5rem;
`;

const PostTitle = styled.span`
    margin-right: 1rem;
    flex: 1 0 70%;
    text-align: left;
`;

const PostVotes = styled.div`
    flex: 1 0 100px;
`;

const LikeButton = styled(IconButton)`

`;

const AuthorItem = styled.div`
    text-align: left;
    flex: 1 0 150px;
    margin-right: 0.5rem;
    width: 150px;
`;

export default {
    Author,
    AuthorItem,
    Container,
    LikeButton,
    Post,
    PostTitle,
    PostVotes,
};