<template>
  <div>
    <h1 v-if="clicked === true">{{ joke_snake }}</h1>
    <button @click="button_clicked">MaK_e-ThI_s-Jok_e-SnA-k_e</button>
  </div>
</template>

<script>
export default {
  name: "snake-joke",

  methods: {
    button_clicked() {
      // This bit of code is like a toggle switch
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
    joke_snake() {
      var grabbed_joke = this.$store.state["joke"];
      grabbed_joke = grabbed_joke.split(" ").join("_");
      return grabbed_joke;
    },
  },
};
</script>

<style scoped>
</style>