import gql from "graphql-tag";

export const POSTS = gql`
  {
    posts {
      id
      content {
        html
      }
      createdAt
      creator {
        id
        firstName
        lastName
        avatar {
          id
          url
        }
      }
    }
  }
`;
