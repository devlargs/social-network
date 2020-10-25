import gql from "graphql-tag";

export const FRIENDS = gql`
  query friends($id: ID!) {
    account(where: { id: $id }) {
      friends {
        id
      }
    }
  }
`;
