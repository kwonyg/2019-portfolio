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
html,
body {
  margin: 0;
}
#app {
  font-family: "Roboto Mono", monospace;
}
</style>
