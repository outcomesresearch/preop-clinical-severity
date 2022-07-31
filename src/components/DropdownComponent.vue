<template>
  <div class="question-chunk">
    <div class="grid dropdown-title">
      <span class="title bold">{{ title }}</span>
      <span class="input" @change="(e) => $emit('change', e)">
        <select>
          <option value="incomplete" selected disabled>Choose...</option>
          <option v-for="o in options" :key="o.id" :value="o.value">
            {{ o.displayValue }}
          </option>
        </select>
      </span>
    </div>
    <div class="description italic" v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["description", "options", "title"],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/breakpoints.scss";

.question-chunk:not(:last-of-type) {
  margin-bottom: 10px;
}

.description {
  text-align: left;
  font-size: 14px;
  color: grey;
}

.dropdown-title {
  grid-template-columns: auto auto;
  align-items: center;
  margin-bottom: 10px;
  grid-gap: 5px;
}

.title {
  text-align: left;
}

.input {
  margin-left: auto;
  margin-right: 5px;
}

@media only screen and (max-width: $SMALL) {
  .description {
    font-size: 15px;
  }
}
</style>
