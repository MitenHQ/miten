import React, { FC } from 'react';
import styled from 'styled-components';
import { IconButton, theme, useClipboard } from '@chakra-ui/react';
import { LimitWidth } from './LimitWidth';
import { Tooltip } from '@chakra-ui/react';
import { BiCopy } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';

const Root = styled.div`
  background-color: ${(theme as any).colors.purple[50]};
  padding: 30px 30px;
`;

const Title = styled.h3`
  color: ${(theme as any).colors.purple[800]};
  font-size: 20px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${(theme as any).colors.purple[600]};
`;

const ShareLink = styled.div`
  width: fit-content;
  font-size: 16px;
  padding: 4px 30px 4px 10px;
  margin: 10px 0;
  border-radius: 6px;
  color: ${(theme as any).colors.gray[100]};
  background-color: ${(theme as any).colors.gray[700]};
`;

type Props = {
  feedbackLink: string;
};

export const NoResponse: FC<Props> = (props) => {
  const { hasCopied, onCopy } = useClipboard(props.feedbackLink);

  return (
    <Root>
      <LimitWidth>
        <Title>No response yet</Title>
        <SubTitle>
          <p>Have you shared the feedback link to your audience?</p>
          <p>
            You can share the feedback link when sending the meeting invite or at the end
            of the meeting. Remind attendees to provide feedback at the end of the
            meeting.
          </p>
          <p>
            If they use the link to submit feedback, you can see the anonymous responses
            here.
          </p>
          <ShareLink>
            <Tooltip hasArrow label="Click to copy">
              <IconButton
                onClick={onCopy}
                aria-label="Copy"
                icon={hasCopied ? <MdDone /> : <BiCopy />}
                colorScheme="transparent"
              />
            </Tooltip>
            {props.feedbackLink}
          </ShareLink>
        </SubTitle>
      </LimitWidth>
    </Root>
  );
};
