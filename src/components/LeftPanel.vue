<template>
  <div>
    <div class="grid dropdown-layout">
      <dropdown-component
        v-for="d in dropdownOptions"
        :key="d.id"
        :title="d.title"
        :description="d.description"
        :options="d.options"
        @change="(e) => addToAnswers(d.id, e)"
      />
    </div>
  </div>
</template>

<script>
import dropdownOptions from "../assets/dropdownOptions.json";
import DropdownComponent from "./DropdownComponent.vue";
import resultsTree from "../assets/resultsTree.js";

export default {
  components: { DropdownComponent },
  name: "LeftPanel",
  data() {
    return {
      dropdownOptions,
      dropdownValues: dropdownOptions.map(() => undefined),
    };
  },
  watch: {
    dropdownValues(dropdownAnswers) {
      if (dropdownAnswers.every((a) => !!a)) {
        const [functionalStatus, comorbidity, weightLoss, tnm] =
          dropdownAnswers;
        const severity =
          resultsTree[functionalStatus][comorbidity][weightLoss][tnm];
        this.$emit("severity-calculated", severity);
      }
    },
  },
  methods: {
    addToAnswers(idOfEmitter, event) {
      this.$set(this.dropdownValues, idOfEmitter, event.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/breakpoints.scss";
// Above 800px, dropdown chunks are listed in one column to left of plot
.dropdown-layout {
  grid-gap: 10px;
}

// Between 600-800px, two columns of dropdown chunks above the plot
@media only screen and (max-width: $MEDIUM) {
  .dropdown-layout {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10px;
  }
}

// Stack dropdowns chunks in one column above plot <600px;
@media only screen and (max-width: $SMALL) {
  .dropdown-layout {
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }
}
</style>
