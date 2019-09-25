<template>
  <section ref="home_section" class="home_section" @click="deActivate($event,0)">
    <div class="shortcut_container">
      <ul class="shortcut_list">
        <li
          class="list_item"
          :class="{ active : active == 1 }"
          @click="activate($event,1)"
          @dblclick="double"
        >
          <short-cut :imageUrl="'man.svg'" :title="'About Me'"></short-cut>
        </li>
        <li
          class="list_item"
          :class="{ active : active == 2 }"
          @click="activate($event,2)"
          @dblclick="double"
        >
          <short-cut :imageUrl="'folder.svg'" :title="'Projects'"></short-cut>
        </li>
        <li
          class="list_item"
          :class="{ active : active == 3 }"
          @click="activate($event,3)"
          @dblclick="double"
        >
          <short-cut :imageUrl="'folder.svg'" :title="'Activities'"></short-cut>
        </li>
      </ul>
      <ul class="shortcut_list">
        <li
          class="list_item"
          :class="{ active : active == 4 }"
          @click="activate($event,4)"
          @dblclick="double"
        >
          <short-cut :imageUrl="'phone-call.svg'" :title="'Contacts'"></short-cut>
        </li>
        <li
          class="list_item"
          :class="{ active : active == 5 }"
          @click="activate($event,5)"
          @dblclick="double"
        >
          <short-cut :imageUrl="'web.svg'" :title="'Guest Book'"></short-cut>
        </li>
        <li
          class="list_item"
          :class="{ active : active == 6 }"
          @click="activate($event,6)"
          @dblclick="double"
        >
          <short-cut :imageUrl="'github.png'" :title="'GitHub'"></short-cut>
        </li>
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
export default class HomeView extends Vue {
  active: number = 0;

  created() {
    this.$on("click", this.activate);
  }

  beforDestroy() {
    this.$off("click", this.activate);
  }

  double() {
    console.log("더블클릭드!");
  }

  deActivate($event: Event) {
    if ($event.target.className === "home_section") {
      console.log("deActivate");
      this.active = 0;
    }
  }

  activate($event: Event, elNum: number) {
    console.log(elNum);

    this.active = elNum;
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
}
section.home_section {
  position: relative;
  height: calc(100vh - 21px); /* vh: 뷰 포트의 높이 100분의 1 단위 */
}

section.home_section .shortcut_container {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

ul.shortcut_list {
  display: flex;
  margin-top: 30px;
  height: 65px;
}

ul.shortcut_list li.list_item {
  cursor: pointer;
  margin-right: 25px;
}

.active {
  background-color: #00007b;
  color: #fff;
  border: 1px dotted #ccc !important;
}
</style>