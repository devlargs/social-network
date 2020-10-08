import gql from "graphql-tag";

export const ACCOUNT = gql`
  query account($id: ID!) {
    account(where: { id: $id }) {
      id
      firstName
      lastName
      avatar {
        url
        id
      }
    }
  }
`;
