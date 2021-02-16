import { gql, useQuery } from '@apollo/client';
import styles from '../styles/Home.module.css';

const QUERY = gql`
  query FetchTodos {
    todos {
      id
      name
      is_completed
    }
  }
`;

const Header = () => {
  const { data, error, loading } = useQuery(QUERY);
  console.log(data);

  return (
    <div>
      <h1 className={styles.title}>Miten!</h1>
    </div>
  );
};

export default Header;
