<template>
  <div id="app">
    <Toolbar />
    <Editor />
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import Editor from './components/Editor.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Editor
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
