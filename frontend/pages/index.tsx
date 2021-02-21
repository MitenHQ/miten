import React, { FC } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Miten</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
      </main>
    </div>
  );
};

export default Home;
