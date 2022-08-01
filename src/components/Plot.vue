<template>
  <div>
    <div class="top-bottom-spaced bold">Overall Survival:</div>
    <div id="chart"></div>
  </div>
</template>

<script>
import c3 from "c3";
import data from "../assets/data";
import colors from "../assets/colors.json";
import tooltip_contents from "../assets/tooltipConfig";
import baseConfig from "../assets/baseConfig";

export default {
  name: "LeftPanel",
  props: ["severity"],
  data() {
    return {
      chart: undefined,
    };
  },
  watch: {
    severity() {
      this.generatePlot(this.severity);
    },
  },
  methods: {
    generatePlot({ number: stage }) {
      // Change base configuration
      baseConfig.data.columns = [
        data[stage][1],
        data[stage][2],
        data[stage][4],
      ];
      baseConfig.color.pattern = [
        `rgba(${colors[stage].opaque})`,
        `rgb(0,0,0,0)`,
        `rgba(${colors[stage].alpha}`,
      ];
      baseConfig.axis.y.max = data[stage][0].max;
      baseConfig.axis.y.min = data[stage][0].min;
      baseConfig.tooltip.contents = function (...args) {
        return tooltip_contents.bind(this, stage, ...args);
      };

      c3.generate(baseConfig);
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", () => this.generatePlot(this.severity));
    });
    this.generatePlot(this.severity);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.generatePlot);
  },
};
</script>

<style scoped lang="scss"></style>
