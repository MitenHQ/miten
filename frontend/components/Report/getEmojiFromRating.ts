const emojis = ['😠', '😕', '😐', '😊', '😍'];

export const getEmojiFromRating = (rating: number): string => emojis[rating - 1];
