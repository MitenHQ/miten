import { FC, CSSProperties } from "react";
import { animated } from "react-spring";
import { EmojiButton, Props as EmojiButtonProps } from "./EmojiButton";

type Props = {
  animation: CSSProperties;
} & EmojiButtonProps;

export const AnimatedEmojiButton: FC<Props> = ({ animation, ...rest }) => (
  <animated.div style={animation}>
    <EmojiButton {...rest}></EmojiButton>
  </animated.div>
);
