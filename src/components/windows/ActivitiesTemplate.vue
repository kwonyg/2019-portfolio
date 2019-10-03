<template>
  <div class="activities_wrap">
    <ul class="activity_list">
      <li class="list_item" v-for="activity in activities" :key="activity.id">
        <activity-card :activity="activity"></activity-card>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
import Spinner from "@/components/Spinner.vue";
import ActivityCard from "@/components/windows/ActivityCard.vue";

@Component({
  components: {
    Spinner,
    ActivityCard
  },
  computed: {
    ...mapGetters({
      activities: "getActivities"
    })
  }
})
export default class ActivitiesTemplate extends Vue {}
</script>
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.activities_wrap {
  font-family: "Gothic A1", sans-serif;
  overflow: scroll;
  overflow-x: hidden;
  height: 93%;
}
</style>