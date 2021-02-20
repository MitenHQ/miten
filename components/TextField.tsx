import styled from 'styled-components';

const Root = styled.input`
  width: 100%;
  height: 3rem;
  border: 1px solid #ddd;
  border-radius: 2rem;
  text-indent: 1rem;
  outline: none;
`;

const TextField = (props) => {
  const { value, placeholder } = props;
  return <Root value={value} placeholder={placeholder} />;
};

export default TextField;
