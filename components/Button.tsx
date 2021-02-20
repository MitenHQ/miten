import styled from 'styled-components';

const Root = styled.div`
  display: block;
  border-radius: 2rem;
  color: white;
  font-size: 1.5rem;
  width: fit-content;
  padding: 0.5rem 4rem;
  text-align: center;
  cursor: pointer;
  background-color: black;
`;

const Button = (props) => {
  const { label } = props;
  return (
    <Root>
      <span>{label}</span>
    </Root>
  );
};

export default Button;
