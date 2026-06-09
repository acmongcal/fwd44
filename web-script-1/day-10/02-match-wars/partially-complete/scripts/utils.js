// Shuffle an array using the Fisher-Yates pattern.
export function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[randomIndex];
    copy[randomIndex] = temp;
  }

  return copy;
}

// Format a number so 1 becomes 01, 2 becomes 02, and so on.
export function formatCount(number) {
  return number < 10 ? `0${number}` : String(number);
}
