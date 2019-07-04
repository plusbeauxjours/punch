import { adjectives, nouns } from "./words";

export const generateSecret = () => {
  const randomNumberAdjectives = Math.floor(Math.random() * adjectives.length);
  const randomNumberNouns = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumberAdjectives]} ${nouns[randomNumberNouns]}`;
};
