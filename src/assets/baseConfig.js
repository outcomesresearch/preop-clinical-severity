export default {
  padding: {
    left: 30,
    bottom: -30,
  },
  data: {
    type: "area-spline",
    types: {
      Survival: "spline",
    },
    groups: [["lowerbound", "difference"]],
    order: null,
  },
  color: {},
  tooltip: {},
  bar: {
    width: {
      ratio: 5,
    },
  },
  grid: {
    y: {
      show: true,
    },
  },
  axis: {
    x: {
      label: "Years",
      padding: {
        left: 0.2,
        right: 0.05,
      },
      tick: {
        culling: false,
        outer: false,
        format: (d) => d + 1,
      },
    },
    y: {
      label: "Survival (%)",
      padding: { top: 0, bottom: 0 },
      tick: {
        count: 6,
      },
    },
  },
  legend: { hide: true },
};
