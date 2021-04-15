import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  margin-top: 16px;
  margin-bottom: 32px;

  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 8px;
  }

  ul,
  ol {
    margin: 0 32px;
  }

  a {
    border-bottom: 1px solid #319795;
    color: #319795;
    cursor: pointer;
  }
`;

export type Props = {
  content?: string | null;
};

export const Markdown: FC<Props> = (props) => (
  <Wrapper>
    <ReactMarkdown>{props.content || ''}</ReactMarkdown>
  </Wrapper>
);
