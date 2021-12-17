<template>
    <div>
        <page-joke></page-joke>
        <joke-button></joke-button>        
        <normal-joke></normal-joke>
        <snake-joke></snake-joke>
        <loud-joke></loud-joke>
    </div>
</template>

<script>
import JokeButton from './JokeButton.vue'
import LoudJoke from './LoudJoke.vue'
import NormalJoke from './NormalJoke.vue'
import SnakeJoke from './SnakeJoke.vue'
import PageJoke from './PageJoke.vue'

    export default {
        name: "home-content",

        components: {
            NormalJoke,
            SnakeJoke,
            LoudJoke,
            JokeButton,
            PageJoke
        },

            methods: {
                get_joke_from_axios() {
                    this.$store.dispatch('get_joke_from_axios')
            }
        }
    } 

</script>

<style scoped>

</style>