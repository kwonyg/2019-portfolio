<template>
  <div class="projects_wrap">
    <img src="../../assets/close.svg" alt />
    <p>fmeklafmealkfmela</p>
    <p>fmeklafmealk여기야fmela</p>
    <p>fmeklafmealkfmela</p>
    <p>fmeklafmealkfmela</p>
    <p>fmeklafmealkfmela</p>
    <p>fmeklafmealkfmela</p>
    <p>fmeklafmealkfmela</p>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class ProjectsTemplate extends Vue {}
</script>

<style scoped>
.projects_wrap {
  overflow: scroll;
  overflow-x: hidden;
  height: 93%;
}
</style>