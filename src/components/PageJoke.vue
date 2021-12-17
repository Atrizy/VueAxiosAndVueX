<template>
  <div>
    <p id="joke">{{ joke }}</p>
  </div>
</template>

<script>
export default {
  name: "page-joke",

  computed: {
    joke() {
      return this.$store.state["joke"];
    },
  },
};
</script>

<style scoped>
</style>