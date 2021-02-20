import styled from 'styled-components';

const Root = styled.footer`
  color: #999;
`;

export const Footer = () => (
  <Root>
    <div>
      <span>Miten 2021 © - </span>
      <a href="https://github.com/MitenHQ">Opensource software</a>
    </div>
    <div>"Miten" means "How" in Finnish</div>
  </Root>
);
