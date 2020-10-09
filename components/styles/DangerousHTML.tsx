import styled from "styled-components";

const DangerousHTML = ({ html }: any): any => (
  <Root
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
);

const Root = styled.span`
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export default DangerousHTML;
