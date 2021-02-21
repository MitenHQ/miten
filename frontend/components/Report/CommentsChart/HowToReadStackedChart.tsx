import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
import React, { FC, useRef } from 'react';
import styled from 'styled-components';
import { BsQuestionCircle } from 'react-icons/bs';

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

export const HowToReadStackedChart: FC = () => {
  const initialFocusRef = useRef(); // a hack just to not show the focus area
  return (
    <Popover initialFocusRef={initialFocusRef} placement="top">
      <PopoverTrigger>
        <Button size="xs" leftIcon={<BsQuestionCircle />}>
          How to read this chart?
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Comments Stacked Bar Chart</PopoverHeader>
        <PopoverBody>
          <Paragraph ref={initialFocusRef}>
            The more each part grown on the left side, means more people answered the
            question of &quot;What to fix&quot; with that answer.
          </Paragraph>
          <Paragraph>
            The count of the same comment is shown in the &quot;X&quot; (↔) axis.
          </Paragraph>
          <Paragraph>
            The goal of Miten is to show areas of improvement, this chart is supposed to
            show that. That&apos;s why we ask &quot;What to fix?&quot; when the meeting
            experience was &quot;Good{' '}
            <span role="img" aria-label="Smile face emoji">
              😊
            </span>{' '}
            &quot; or lower.
          </Paragraph>
          <Paragraph>
            We asked people who reacted &quot;Awesome{' '}
            <span role="img" aria-label="Love face emoji">
              😍
            </span>{' '}
            &quot; what was good, and the responses are on the right side in green.
          </Paragraph>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
