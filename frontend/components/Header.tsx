import React, { FC } from 'react';
import { useGenerateLinkMutation } from '../lib/graphql/hooks';
import styles from '../styles/Home.module.css';

const Header: FC = () => {
  const [generateLink, { loading, data, error }] = useGenerateLinkMutation({
    errorPolicy: 'all',
  });
  console.log(loading, data, error);

  return (
    <div>
      <h1 className={styles.title}>Miten!</h1>
      <button
        onClick={() =>
          generateLink({ variables: { data: { email: 'sample@example.com' } } })
        }
      >
        Generate Sample Link
      </button>
    </div>
  );
};

export default Header;
