let alpha = {
  class: "alpha",
  number: 0,
  day30: { value: 5, ci: [1.7, 11] },
  day90: { value: 20, ci: [13, 29] },
};

let beta = {
  class: "beta",
  number: 1,
  day30: { value: 9, ci: [6, 14] },
  day90: { value: 26, ci: [21, 32] },
};

let gamma = {
  class: "gamma",
  number: 2,
  day30: { value: 14, ci: [10, 20] },
  day90: { value: 32, ci: [26, 39] },
};

let delta = {
  class: "delta",
  number: 3,
  day30: { value: 21, ci: [13, 32] },
  day90: { value: 60, ci: [49, 70] },
};

let tree = {
  ">=4METs": {
    "none/mild": {
      no: {
        "1or2": alpha,
        "3or4": beta,
      },
      yes: {
        "1or2": beta,
        "3or4": gamma,
      },
    },
    "mod/severe": {
      no: {
        "1or2": beta,
        "3or4": gamma,
      },
      yes: {
        "1or2": gamma,
        "3or4": delta,
      },
    },
  },
  "<4METs": {
    "none/mild": {
      no: {
        "1or2": beta,
        "3or4": gamma,
      },
      yes: {
        "1or2": gamma,
        "3or4": delta,
      },
    },
    "mod/severe": {
      no: {
        "1or2": gamma,
        "3or4": delta,
      },
      yes: {
        "1or2": gamma,
        "3or4": delta,
      },
    },
  },
};

export default tree;
