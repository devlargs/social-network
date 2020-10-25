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

export const ACCOUNTS = gql`
  query accounts($first: Int, $after: String, $userId: ID!) {
    accounts(
      stage: PUBLISHED
      where: { id_not: $userId }
      first: $first
      after: $after
    ) {
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
