import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

const toPercentage = (number) => `${number}%`;

Vue.filter("titleCase", function (word) {
  return [word[0].toUpperCase(), ...word.slice(1)].join("");
});

Vue.filter("percentage", toPercentage);

Vue.filter("percentageRange", function (array) {
  return array.map(toPercentage).join(" to ");
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
