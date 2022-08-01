import data from "../assets/data";
import { toPercentageRange, determinePlural, toPercentage } from "./filters";

const formatters = {
  difference: (stage, year) => {
    let low = data[stage][2][year];
    let high = data[stage][3][year];
    return { displayName: "Confidence", value: toPercentageRange([low, high]) };
  },
  Survival: (stage, year, yaxisValue) => {
    return {
      displayName: "Survival",
      value: toPercentage(yaxisValue),
    };
  },
};

export default function tooltip_contents(
  stage,
  d,
  defaultTitleFormat,
  defaultValueFormat,
  color
) {
  let yearValue = d[0].index + 1; // all have same x-index so pick first one
  let title = `${yearValue} year${determinePlural(yearValue)}`;
  let HTML = `<table class='${this.CLASS.tooltip}'>`;
  HTML += `<tr id='title'><th colspan='2'>${title}</th></tr>`;

  // d is array containing a slice of each dataset at this x value
  // However, we only want two rows - one for survival % (an actual dataset)
  // and one for the confidence interval, which is a combination of lower
  //  and upper bound datasets)
  d.forEach(({ name, value: yAxisValue, id }) => {
    if (name !== "lowerbound") {
      // no row for lowerBound.  Get name and value for row
      const args = [stage, yearValue, yAxisValue];
      const { displayName, value } = formatters[id](...args);
      HTML += `<tr class='${this.CLASS.tooltipName}-${id}'>`;
      HTML += `<td class='name'>
      <span style='background-color:${color(id)}'></span>${displayName}</td>`;
      HTML += `<td class='value'>${value}</td>`;
      HTML += "</tr>";
    }
  });
  return HTML + "</table>";
}
