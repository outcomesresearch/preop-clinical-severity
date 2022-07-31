<template>
  <div>
    <div class="grid dropdown-layout">
      <dropdown-component
        v-for="d in dropdowns"
        :key="d.id"
        :title="d.title"
        :description="d.description"
        :options="d.options"
      />
    </div>
  </div>
</template>

<script>
import dropdowns from "../assets/dropdownOptions.json";
import DropdownComponent from "./DropdownComponent.vue";

export default {
  components: { DropdownComponent },
  name: "LeftPanel",
  data() {
    return { dropdowns };
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
