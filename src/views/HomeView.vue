<template>
  <section class="home_section">
    <div class="shortcut_container">
      <ul class="shortcut_list">
        <li class="list_item">
          <short-cut :imageUrl="'man.svg'" :title="'About Me'"></short-cut>
        </li>
        <li class="list_item">
          <short-cut :imageUrl="'folder.svg'" :title="'Projects'"></short-cut>
        </li>
        <li class="list_item">
          <short-cut :imageUrl="'folder.svg'" :title="'Activities'"></short-cut>
        </li>
      </ul>
      <ul class="shortcut_list">
        <!-- <li class="list_item">
          <short-cut></short-cut>
        </li>
        <li class="list_item">
          <short-cut></short-cut>
        </li>
        <li class="list_item">
          <short-cut></short-cut>
        </li>
        <li class="list_item">
          <short-cut></short-cut>
        </li>-->
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ShortCut from "@/components/ShortCut.vue";

@Component({
  components: {
    ShortCut
  }
})
export default class HomeView extends Vue {}
</script>

<style scoped>
li {
  list-style-type: none;
}
section.home_section {
  position: relative;
  height: calc(100vh - 21px); /* vh: 뷰 포트의 높이 100분의 1 단위 */
}

.shortcut_container {
  position: absolute;
  bottom: 10px;
  left: 10px;
  z-index: 99;
}

ul.shortcut_list {
  display: flex;
}

ul.shortcut_list .list_item {
  margin-right: 20px;
}
</style>