export const toPercentage = (number) => `${number.toFixed(0)}%`;

export const toTitleCase = (word) =>
  [word[0].toUpperCase(), ...word.slice(1)].join("");

export const toPercentageRange = (tuplet) =>
  tuplet.map(toPercentage).join(" to ");

export const determinePlural = (number) => (number > 1 ? "s" : "");
