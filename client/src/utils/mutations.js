import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($id: ID!) {
        saveBook(bookId: $id) {
            bookId
            authors
            description
            image
            link
            title
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook($id: ID!) {
        deleteBook(bookId: $id) {
            bookId
            authors
            description
            image
            link
            title
        }
    }
`;
