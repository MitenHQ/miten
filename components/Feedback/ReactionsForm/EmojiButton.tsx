import { FC } from "react";
import styled from "styled-components";

const Emoji = styled.div`
  font-size: 60px;
  line-height: 60px;
  will-change: transform;
  transition: 300ms transform;
  transition-timing-function: cubic-bezier(0, -0.03, 0.14, 2.18);
  :hover {
    transform: scale(1.1);
  }
`;

const Root = styled.button`
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0.375rem;
  padding: 5px;
  :focus {
    outline: none;
  }

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgb(66 153 225 / 60%);
  }

  :focus-within > ${Emoji} {
    transform: scale(1.1);
  }
`;

const Label = styled.div`
  font-size: 14px;
  color: #555;
`;

export type Props = {
  onClick: () => void;
  emoji: string;
  label: string;
  tabIndex: number;
};

export const EmojiButton: FC<Props> = (props) => (
  <Root tabIndex={props.tabIndex} onClick={props.onClick}>
    <Emoji>{props.emoji}</Emoji>
    <Label>{props.label}</Label>
  </Root>
);
