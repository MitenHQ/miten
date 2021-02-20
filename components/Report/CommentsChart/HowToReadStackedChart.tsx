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
import React, { useRef } from 'react';
import styled from 'styled-components';
import { BsQuestionCircle } from 'react-icons/bs';

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

export const HowToReadStackedChart = () => {
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
            question of "What to fix" with that answer.
          </Paragraph>
          <Paragraph>
            The count of the same comment is shown in the "X" (↔) axis.
          </Paragraph>
          <Paragraph>
            The goal of Miten is to show areas of improvement, this chart is supposed to
            show that. That's why we ask "What to fix?" when the meeting experience was
            "Good <span>😊</span> " or lower.
          </Paragraph>
          <Paragraph>
            We asked people who reacted "Awesome <span>😍</span> " what was good, and the
            responses are on the right side in green.
          </Paragraph>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
