import gql from "graphql-tag";

export const CREATE_ACCOUNT = gql`
  mutation createAccount($data: AccountCreateInput!) {
    createAccount(data: $data) {
      id
    }
  }
`;

export const PUBLISH_ACCOUNT = gql`
  mutation publish($id: ID!) {
    publishAccount(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

export default {};
