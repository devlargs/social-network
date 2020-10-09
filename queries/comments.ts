import gql from "graphql-tag";

export const COMMENTS_BY_POST_ID = gql`
  query($id: ID!) {
    posts(where: { id: $id }) {
      id
      comments {
        id
        content {
          html
        }
        creator {
          id
          firstName
          lastName
          avatar {
            url
            id
          }
        }
      }
    }
  }
`;

export default {};
