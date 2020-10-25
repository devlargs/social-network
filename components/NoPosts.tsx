import styled from "styled-components";
import AddFriends from "./svg/AddFriends";

const NoPosts = () => {
  return (
    <Root className="post-content">
      <AddFriends />
      <h4>Newsfeed Empty? You might want to follow someone first.</h4>
    </Root>
  );
};

const Root = styled.div`
  padding: 20px;
  display: grid;
  place-items: center;
  text-align: center;
`;

export default NoPosts;
