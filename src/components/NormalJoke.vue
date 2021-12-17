<template>
  <div>
    <h1 v-if="clicked === true">{{ normal_joke }}</h1>
      <button @click="button_clicked">Make the joke normal!</button>
  </div>
</template>

<script>
export default {
  name: "normal-joke",

  methods: {
      // This bit of code is like a toggle switch
      button_clicked() {
        if(this.clicked === false) {
          this.clicked = true;
        } else {
          this.clicked = false;
        }
      }
  },

  data() {
    return {
      clicked: false,
    }
  },

  computed: {
    normal_joke() {
      var normal_grabbed_joke = this.$store.state['joke'];
      return normal_grabbed_joke;
    }
  },
};
</script>

<style scoped>
</style>