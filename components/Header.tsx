import styled from 'styled-components';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import styles from '../styles/Home.module.css';
import { Button, Input } from '@chakra-ui/react';

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
  width: 320px;
  height: 240px;
`;

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { data, error, loading } = useQuery(QUERY);
  console.log(data);

  const handleClickGenerate = () => {
    setIsLoading(true);
  };

  return (
    <Root>
      <h1 className={styles.title}>Miten!</h1>
      <Input placeholder="Your Email..." />
      <Button
        isLoading={isLoading}
        loadingText="Generating..."
        colorScheme="teal"
        onClick={handleClickGenerate}
      >
        Generate a Miten!
      </Button>
    </Root>
  );
};

export default Header;
