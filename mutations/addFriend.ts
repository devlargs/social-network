import gql from "graphql-tag";

export const ADD_FRIEND = gql`
  mutation updateAccount(
    $where: AccountWhereUniqueInput!
    $data: AccountUpdateInput!
  ) {
    updateAccount(where: $where, data: $data) {
      id
      friends {
        id
      }
    }
  }
`;
