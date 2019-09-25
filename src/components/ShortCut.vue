<template>
  <div class="short_cut">
    <img class="shortcut_img" :src="require(`../assets/${imageUrl}`)" />
    <div class="shortcut_title">{{title}}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ShortCut extends Vue {
  @Prop() readonly imageUrl!: string;
  @Prop() readonly title!: string;
}
</script>
<style scoped>
.short_cut {
  text-align: center;
}

img.shortcut_img {
  width: 40px;
  height: 40px;
}
</style>