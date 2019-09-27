<template>
  <div class="acitivities_wrap">
    <ul>
      <li
        v-for="activity in acitivies"
      >{{activity.id}} | {{ activity.title}} | {{ activity.content}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";

@Component({
  computed: {
    ...mapGetters({
      acitivies: "getActivities"
    })
  }
})
export default class AboutmeTemplate extends Vue {}
</script>