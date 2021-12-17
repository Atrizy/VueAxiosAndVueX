<template>
  <div>
    <h1 v-if="clicked === true">{{ loud_joke }}</h1>
    <button @click="button_clicked">Make this joke LOUD!!</button>
  </div>
</template>

<script>
export default {
  name: "loud-joke",

  methods: {
    // This bit of code is like a toggle switch
    button_clicked() {
      if (this.clicked === false) {
        this.clicked = true;
      } else {
        this.clicked = false;
      }
    },
  },

  data() {
    return {
      clicked: false,
    };
  },

  computed: {
    loud_joke() {
      var joke_grabbed = this.$store.state["joke"];
      joke_grabbed = joke_grabbed.toUpperCase("");
      return joke_grabbed;
    },
  },
};
</script>

<style scoped>
</style>