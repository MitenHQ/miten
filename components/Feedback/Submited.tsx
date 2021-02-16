import styled from "styled-components";

const Root = styled.div`
  margin-top: 100px;
`;

export const Submited = () => (
  <Root>
    <span role="img" aria-label="Love">
      ❤️
    </span>{" "}
    Thanks for the feedback!
  </Root>
);
