<template>
  <div class="projects_wrap">
    <ul class="project_list">
      <li class="list_item" v-for="project in projects" :key="project.id">
        <project-card :project="project"></project-card>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
import Spinner from "@/components/Spinner.vue";
import ProjectCard from "@/components/windows/ProjectCard.vue";

@Component({
  components: {
    ProjectCard
  },
  computed: {
    ...mapGetters({ projects: "getProjects" })
  }
})
export default class ProjectsTemplate extends Vue {}
</script>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.projects_wrap {
  font-family: "Gothic A1", sans-serif;
  padding: 20px;
  overflow: scroll;
  overflow-x: hidden;
  height: 87%;
  background-color: #fff;
}
</style>