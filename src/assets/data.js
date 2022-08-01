function generateDifference(lowerBoundArray, upperBoundArray) {
  return upperBoundArray.map((u, index) =>
    index === 0 ? "difference" : u - lowerBoundArray[index]
  );
}

let bounds = {
  "-1": [
    { max: 1, min: 0 },
    ["Survival"],
    ["lowerbound"],
    ["upperbound"],
    ["difference"],
  ],
  0: [
    { max: 1, min: 0.75 },
    ["Survival", 0.975, 0.943, 0.943, 0.9, 0.9],
    ["lowerbound", 0.941, 0.888, 0.888, 0.803, 0.803],
    ["upperbound", 1, 0.998, 0.998, 0.9974, 0.9974],
  ],
  1: [
    { max: 1, min: 0.5 },
    ["Survival", 0.958, 0.9, 0.814, 0.786, 0.75],
    ["lowerbound", 0.931, 0.856, 0.747, 0.711, 0.651],
    ["upperbound", 0.985, 0.943, 0.881, 0.861, 0.849],
  ],
  2: [
    { max: 1, min: 0.25 },
    ["Survival", 0.868, 0.724, 0.642, 0.602, 0.602],
    ["lowerbound", 0.818, 0.655, 0.562, 0.508, 0.508],
    ["upperbound", 0.917, 0.793, 0.721, 0.696, 0.696],
  ],
  3: [
    { max: 1, min: 0 },
    ["Survival", 0.781, 0.643, 0.475, 0.362, 0.362],
    ["lowerbound", 0.684, 0.52, 0.326, 0.183, 0.183],
    ["upperbound", 0.877, 0.766, 0.624, 0.54, 0.54],
  ],
};

bounds[0][4] = generateDifference(bounds[0][2], bounds[0][3]);
bounds[1][4] = generateDifference(bounds[1][2], bounds[1][3]);
bounds[2][4] = generateDifference(bounds[2][2], bounds[2][3]);
bounds[3][4] = generateDifference(bounds[3][2], bounds[3][3]);

export default bounds;
