<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p v-for="num in list" :key="num">{{ num }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    axios.get('/api/list').then((res) => {
      console.log('res', res)
      if(res.data) {
        this.list = res.data
      }
    })
  },
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
