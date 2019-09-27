<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import AppHeader from "@/components/AppHeader.vue";
@Component({
  components: { AppHeader }
})
export default class App extends Vue {}
</script>
<style>
@font-face {
  font-family: DungGeunMo;
  src: url("/assets/fonts/DungGeunMo.eot") format("eot")
      url("/assets/fonts/DungGeunMo.woff2") format("woff2"),
    url("/assets/fonts/DungGeunMo.woff") format("woff");
}
html,
body {
  margin: 0;
  overflow: hidden;
}

html {
  background: url(./assets/wallpaper.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app {
  /* font-family: "Roboto Mono", monospace; */
  /* font-family: "DungGeunMo", monospace; */
  font-family: "Gothic A1", sans-serif;

  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
}
</style>
