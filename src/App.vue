<template>
  <div id="app">
    <router-view />
    <task-bar></task-bar>
  </div>
</template>

<script>
import TaskBar from "./components/TaskBar.vue";

export default {
  components: {
    TaskBar
  }
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  1min-height: 600px;
  height: 100%;
}
#app {
  font-family: "Noto Sans KR", sans-serif;
  height: 100%;
}
.window {
  height: 100px;
}
</style>
