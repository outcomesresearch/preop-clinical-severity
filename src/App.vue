<template>
  <outcomes-research-wrapper :_title="`Clinical Severity Applet`">
    <div id="app" class="">
      <div class="card">
        <img src="./assets/header-logo.svg" class="logo" />

        <div class="grid overall-container">
          <LeftPanel @severity-calculated="($event) => (severity = $event)" />
          <div>
            <ResultsTop :severity="severity" />
            <Plot :severity="severity" />
          </div>
        </div>
      </div>
    </div>
  </outcomes-research-wrapper>
</template>

<script>
import LeftPanel from "./components/LeftPanel.vue";
import ResultsTop from "./components/ResultsTop.vue";
import Plot from "./components/Plot.vue";

export default {
  name: "App",
  components: {
    LeftPanel,
    ResultsTop,
    Plot,
  },
  data() {
    return {
      severity: { number: -1 },
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/breakpoints.scss";
@import "./assets/scss/c3.scss";

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  max-width: 100%;
  width: 900px;
  margin: 20pt;
  margin-left: auto;
  margin-right: auto;
}

.center {
  text-align: center;
}

.grid {
  display: grid;
}

.overall-container {
  grid-template-columns: 1fr 3fr;
  width: 100%;
  grid-gap: 10px;
}

.logo {
  width: 400px;
  max-width: 100%;
  float: left;
  padding-bottom: 10px;
}

.card {
  border-radius: 5px;
  overflow: hidden;
  max-width: 100%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  padding: 20px;
}

.italic {
  font-style: oblique;
}

.bold {
  font-weight: 500;
}

// C3.js needs ot be in here
.c3-tooltip th,
.c3-tooltip td {
  font-size: 10px;
}

/*alternative coloring for title of toolitp*/
.c3-tooltip th {
  /*background-color: gainsboro;
    color: black;*/
}

.c3-line-difference,
.c3-circles-difference,
.c3-circles-lowerbound,
.c3-line-lowerbound {
  display: none;
}

.top-bottom-spaced {
  margin-top: 8px;
  margin-bottom: 8px;
}

@media only screen and (max-width: $MEDIUM) {
  .overall-container {
    grid-template-columns: 1fr;
  }
  .card {
    padding: 10px;
  }
}
</style>
