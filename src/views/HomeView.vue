<template>
  <section ref="home_section" class="home_section" @click="deActivate($event,0)">
    <window-modal class="window_modal" :show="true"></window-modal>
    <div class="shortcut_container">
      <ul class="shortcut_list">
        <li class="list_item" :class="{ active : active === 'aboutme' }">
          <short-cut :imageUrl="'man.svg'" :title="'About Me'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active : active === 'projects' }">
          <short-cut :imageUrl="'folder.svg'" :title="'Projects'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active : active === 'activities' }">
          <short-cut :imageUrl="'folder.svg'" :title="'Activities'" @clickedIcon="activate"></short-cut>
        </li>
      </ul>
      <ul class="shortcut_list">
        <li class="list_item" :class="{ active : active === 'contacts' }">
          <short-cut :imageUrl="'phone-call.svg'" :title="'Contacts'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active : active === 'guestbook' }">
          <short-cut :imageUrl="'web.svg'" :title="'Guest Book'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active : active == 'github' }">
          <short-cut :imageUrl="'github.png'" :title="'GitHub'" @clickedIcon="activate"></short-cut>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ShortCut from "@/components/ShortCut.vue";
import WindowModal from "@/components/WindowModal.vue";

@Component({
  components: {
    ShortCut,
    WindowModal
  }
})
export default class HomeView extends Vue {
  active: string = "";
  clickCount: number = 0;

  deActivate($event: Event) {
    if (($event.target as HTMLElement).className === "home_section") {
      console.log("deActivate");
      this.active = "";
    }
  }

  activate(title: string) {
    title = title.replace(/(\s*)/g, "").toLowerCase();
    console.log(title);
    this.active = title;
    this.clickCount++;
    if (this.clickCount === 1) {
      // the first click in .2s
      const self = this;
      setTimeout(function() {
        switch (
          self.clickCount // check the event type
        ) {
          case 1:
            console.log("oneClick"); // self.active = elNum;
            break;
          default:
            console.log("double clicked!");
        }
        self.clickCount = 0; // reset the first click
      }, 200); // wait 0.2s
    } // if
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
  height: 70px;
}

ul.shortcut_list li.list_item {
  cursor: pointer;
  padding: 5px;
  margin-right: 25px;
}

li.list_item.active {
  background-color: #00007b;
  color: #fff;
  border: 1px dotted #ccc !important;
}
</style>