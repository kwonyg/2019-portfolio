<template>
  <section class="project_section">
    <h1>Projects</h1>
    <ul class="project_list">
      <li v-for="(project, index) in projects" :key="index">
        <list-item-card :item="project"></list-item-card>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ListItemCard from "../ListItemCard.vue";

export default {
  components: {
    ListItemCard
  },

  computed: {
    ...mapGetters({
      projects: "fetchedProjects"
    })
  },
  created() {
    this.$store.dispatch("FETCH_PROJECTS");
  }
};
</script>

<style scoped>
h2 {
  margin-top: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 auto;
  max-width: 600px;
  color: #fff;
  margin-bottom: 100px;
}
</style>
