<template>
  <div>
    <div class="top-banner bold">
      Clinical Severity Staging:
      <span v-if="severity && severity.class" class="bold">{{
        severity.class | titleCase
      }}</span>
    </div>
    <div class="grid split top-bottom-spaced">
      <div class="pane">
        <div class="label bold">30-Day Unplanned Readmission Rate:</div>
        <div id="day30" class="top-bottom-spaced center">
          <span v-if="!severity" id="main" class="placeholder">N/A</span>
          <div v-else class="grid number-container">
            <span id="main">{{ severity.day30.value | percentage }}</span>
            <span id="ci" class="italic percentage-range"
              >({{ severity.day30.ci | percentageRange }})</span
            >
          </div>
        </div>
        <div class="description italic">
          Numbers in parentheses represent 95% confidence interval.
        </div>
      </div>
      <div class="pane">
        <div class="label bold">90-Day Complication Rate:</div>
        <div id="day90" class="top-bottom-spaced center">
          <span v-if="!severity" id="main" class="placeholder">N/A</span>
          <div v-else class="grid number-container">
            <span id="main">{{ severity.day90.value | percentage }}</span>
            <span id="ci" class="italic percentage-range"
              >({{ severity.day90.ci | percentageRange }})</span
            >
          </div>
        </div>
        <div class="description italic">
          Numbers in parentheses represent 95% confidence interval.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftPanel",
  props: ["severity"],
};
</script>

<style scoped lang="scss">
@import "../assets/scss/breakpoints.scss";

.top-bottom-spaced {
  margin-top: 8px;
  margin-bottom: 8px;
}

.split {
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid grey;
}

.top-banner {
  padding: 5px;
  font-size: 18px;
  background-color: gainsboro;
  border: none !important;
}

.top-banner span {
  font-style: oblique;
  color: #a51417;
}

#main {
  font-size: 28px;
  color: black;
}

#main.placeholder {
  color: gainsboro;
}

#ci {
  color: grey;
  font-size: 20px;
}

.description {
  font-size: 14px;
  color: grey;
}

.pane:first-child {
  border-right: 1px solid grey;
}

.percentage-range {
  padding-left: 5px;
}

.number-container {
  grid-template-columns: min-content max-content;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: $SMALL) {
  .number-container {
    grid-template-columns: 1fr;
  }
}
</style>
