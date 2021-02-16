import { Reactions } from "./constants";

const initialTitle = "How was the meeting?";
const titles = {
  [Reactions.HORRIBLE]: "Sorry! What went wrong?",
  [Reactions.BAD]: "Sorry! What to fix?",
  [Reactions.MEH]: "Okay, what to fix?",
  [Reactions.GOOD]: "Thanks! What to improve?",
  [Reactions.AWESOME]: "Great! What was good?"
};

export const getTitle = (reaction: Reactions | null) =>
  reaction ? titles[reaction] : initialTitle;
