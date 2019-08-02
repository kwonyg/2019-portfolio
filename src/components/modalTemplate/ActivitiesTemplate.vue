<template>
  <section class="activity_section">
    <h1>Activities</h1>
    <ul class="acitivity_list">
      <li v-for="(activity, index) in activities" :key="index">
        <list-item-card :item="activity"></list-item-card>
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
      activities: "fetchedActivities"
    })
  },
  created() {
    this.$store.dispatch("FETCH_ACTIVITIES");
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
