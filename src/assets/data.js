function generateDifference(lowerBoundArray, upperBoundArray) {
  return upperBoundArray.map((u, index) =>
    index === 0 ? "difference" : u - lowerBoundArray[index]
  );
}

let bounds = {
  "-1": [
    { max: 100, min: 0 },
    ["Survival"],
    ["lowerbound"],
    ["upperbound"],
    ["difference"],
  ],
  0: [
    { max: 100, min: 75 },
    ["Survival", 97.5, 94.3, 94.3, 90.0, 90.0],
    ["lowerbound", 94.1, 88.8, 88.8, 80.3, 80.3],
    ["upperbound", 100, 99.8, 99.8, 99.74, 99.74],
  ],
  1: [
    { max: 100, min: 50 },
    ["Survival", 95.8, 90, 81.4, 78.6, 75],
    ["lowerbound", 93.1, 85.6, 74.7, 71.1, 65.1],
    ["upperbound", 98.5, 94.3, 88.1, 86.1, 84.9],
  ],
  2: [
    { max: 100, min: 25 },
    ["Survival", 86.8, 72.4, 64.2, 60.2, 60.2],
    ["lowerbound", 81.8, 65.5, 56.2, 50.8, 50.8],
    ["upperbound", 91.7, 79.3, 72.1, 69.6, 69.6],
  ],
  3: [
    { max: 100, min: 0 },
    ["Survival", 78.1, 64.3, 47.5, 36.2, 36.2],
    ["lowerbound", 68.4, 52, 32.6, 18.3, 18.3],
    ["upperbound", 87.7, 76.6, 62.4, 54, 54],
  ],
};

bounds[0][4] = generateDifference(bounds[0][2], bounds[0][3]);
bounds[1][4] = generateDifference(bounds[1][2], bounds[1][3]);
bounds[2][4] = generateDifference(bounds[2][2], bounds[2][3]);
bounds[3][4] = generateDifference(bounds[3][2], bounds[3][3]);

export default bounds;
