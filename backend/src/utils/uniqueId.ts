import { customAlphabet  } from 'nanoid'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10);

export const uniqueId = () => nanoid()
  // add dashes after each 3 char
  .replace(/(\w{3})(\w{3})(\w{4})/, "$1-$2-$3")
