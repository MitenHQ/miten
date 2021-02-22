import React, { useState, FC } from 'react';
import { useGenerateLinkMutation } from '../lib/graphql/hooks';
import styles from '../styles/Home.module.css';
import { Button, Input } from '@chakra-ui/react';
import styled from 'styled-components';

const Root = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 320px;
  height: 480px;
`;

const LinkContainer = styled.section`
  display: flex;
  flex-flow: column nowrap;
  width: 320px;
  height: 200px;
  color: teal;
  text-align: center;
  & span {
    font-size: 0.6rem;
  }
`;

const Header: FC = () => {
  const [generateLink, { loading, data, error }] = useGenerateLinkMutation({
    errorPolicy: 'all',
  });
  console.log(data, error);

  const [email, setEmail] = useState('');
  const [isFeedBackLinkCopied, setIsFeedBackLinkCopied] = useState(false);
  const [isReportLinkCopied, setIsReportLinkCopied] = useState(false);

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleClickGenerate = () => {
    generateLink({ variables: { data: { email } } });
  };

  const handleCopyLink = (e: any) => {
    e.target.select();
    document.execCommand('copy');
    if (e.target.name === 'feedbackLinkInput') {
      setIsFeedBackLinkCopied(true);
      setIsReportLinkCopied(false);
    } else {
      setIsReportLinkCopied(true);
      setIsFeedBackLinkCopied(false);
    }
  };

  return (
    <Root>
      <h1 className={styles.title}>Miten!</h1>
      <Input placeholder="Your Email..." value={email} onChange={handleChangeEmail} />
      <Button
        isLoading={loading}
        loadingText="Generating..."
        colorScheme="teal"
        onClick={handleClickGenerate}
      >
        Generate a Link!
      </Button>
      <LinkContainer>
        {data && (
          <>
            <h2 className={styles.subtitle}>Feedback Link</h2>
            <span>{isFeedBackLinkCopied ? 'COPIED :)' : 'CLICK LINK TO COPY'}</span>
            <Input
              name="feedbackLinkInput"
              onClick={handleCopyLink}
              value={data.generateLink?.link ?? ''}
              onChange={() => null}
            />
            <h2 className={styles.subtitle}>Get Reports</h2>
            <span>{isReportLinkCopied ? 'COPIED :)' : 'CLICK LINK TO COPY'}</span>
            <Input
              name="reportLinkInput"
              onClick={handleCopyLink}
              value={data.generateLink?.reportLink ?? ''}
              onChange={() => null}
            />
          </>
        )}
      </LinkContainer>
    </Root>
  );
};

export default Header;
