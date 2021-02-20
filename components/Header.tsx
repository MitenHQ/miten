import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import styles from '../styles/Home.module.css';
import Button from './Button';
import TextField from './TextField';

const QUERY = gql`
  query FetchTodos {
    todos {
      id
      name
      is_completed
    }
  }
`;

const Root = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 200px;
`;

const Header = () => {
  const { data, error, loading } = useQuery(QUERY);
  console.log(data);

  return (
    <Root>
      <h1 className={styles.title}>Miten!</h1>
      <TextField placeholder="Your Email..." />
      <Button label="Generate a Miten!" />
    </Root>
  );
};

export default Header;
