export function randomNumberHelper(): string {
  return `${Math.floor(Math.random() * 1000000) + 1}`;
}
