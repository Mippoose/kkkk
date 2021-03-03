<template>
  <Creator></Creator>
</template>

<script>
import { computed } from 'vue'
import Creator from "./components/creator/index.vue"
export default {
  name: 'App',
  data(){
    return{
      ActiveComponents: [],
    }
  },
  components: {
    Creator
  },
  methods:{

  },
  computed: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
