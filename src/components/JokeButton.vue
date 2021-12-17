<template>
  <div>
    <button @click="get_joke_from_axios">Click me for a joke!</button>
  </div>
</template>

<script>
export default {
  name: "joke-button",

  methods: {
    get_joke_from_axios() {
      this.$store.dispatch("get_joke_from_axios", this.joke);
    },
  },
};
</script>

<style scoped>
</style>