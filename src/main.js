import Vue from "vue";
import App from "./App.vue";
import OutcomesResearchWrapper from "shared-code";
import { toPercentage, toTitleCase, toPercentageRange } from "./assets/filters";

Vue.use(OutcomesResearchWrapper);

Vue.config.productionTip = false;

Vue.filter("titleCase", toTitleCase);

Vue.filter("percentage", toPercentage);

Vue.filter("percentageRange", toPercentageRange);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
