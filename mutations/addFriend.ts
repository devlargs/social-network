import gql from "graphql-tag";

export const ADD_FRIEND = gql`
  mutation updateAccount($followerId: ID!, $followingId: ID!) {
    updateAccount(
      where: { id: $followerId }
      data: { friends: { connect: [{ where: { id: $followingId } }] } }
    ) {
      id
      friends {
        id
      }
    }
  }
`;

export default {};
