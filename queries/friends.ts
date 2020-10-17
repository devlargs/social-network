import gql from "graphql-tag";

export const FRIENDS = gql`
  query friends($id: ID!) {
    accounts(where: { id: $id }) {
      friends {
        id
      }
    }
  }
`;
