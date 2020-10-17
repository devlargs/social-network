import gql from "graphql-tag";

export const POSTS = gql`
  query posts($friends: [ID!]) {
    posts(where: { creator: { id_in: $friends } }) {
      id
      content {
        html
      }
      createdAt
      likes {
        id
      }
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
