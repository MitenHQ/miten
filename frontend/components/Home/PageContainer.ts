import styled from 'styled-components';

export const PageContainer = styled.div<{ noWidthLimit?: boolean; border?: boolean }>`
  position: relative;
  width: 100%;
  max-width: ${(props) => (props.noWidthLimit ? 'none' : '1200px')};
  margin-right: auto;
  margin-left: auto;
  padding: ${(props) => (props.noWidthLimit ? '0' : '0 25px')};
  overflow: hidden;
  border-top: ${(props) => (props.border ? '1px solid #CDD1D4' : '')};

  @media only screen and (max-width: 1024px) {
    max-width: ${(props) => (props.noWidthLimit ? 'none' : '950px')};
  }

  @media only screen and (max-width: 768px) {
    max-width: ${(props) => (props.noWidthLimit ? 'none' : '700px')};
  }

  @media only screen and (max-width: 414px) {
    max-width: ${(props) => (props.noWidthLimit ? 'none' : '370px')};
  }
`;
