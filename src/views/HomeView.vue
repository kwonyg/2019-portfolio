<template>
  <section ref="home_section" class="home_section" @click="deActivate($event,0)">
    <aboutme-window
      class="window_modal"
      :title="'About Me'"
      :show="aboutmeShow"
      @close="closeWindow"
    ></aboutme-window>
    <activities-window
      class="window_modal"
      :title="'Activities'"
      :show="activitiesShow"
      @close="closeWindow"
    ></activities-window>
    <contacts-window
      class="window_modal"
      :title="'Contacts'"
      :show="contactsShow"
      @close="closeWindow"
    ></contacts-window>
    <div class="shortcut_container">
      <ul class="shortcut_list">
        <li class="list_item" :class="{ active : active === 'aboutme' }">
          <short-cut :imageUrl="'man.svg'" :title="'About Me'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active : active === 'projects' }">
          <short-cut :imageUrl="'folder.svg'" :title="'Projects'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active : active === 'activities' }">
          <short-cut :imageUrl="'sns.svg'" :title="'Activities'" @clickedIcon="activate"></short-cut>
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
import bus from "@/utils/bus";
import ShortCut from "@/components/ShortCut.vue";
import ActivitiesWindow from "@/components/windows/ActivitiesWindow.vue";
import AboutmeWindow from "@/components/windows/AboutmeWindow.vue";
import ContactsWindow from "@/components/windows/ContactsWindow.vue";
@Component({
  components: {
    ShortCut,
    ActivitiesWindow,
    AboutmeWindow,
    ContactsWindow
  }
})
export default class HomeView extends Vue {
  public active: string = "";
  public clickCount: number = 0;

  // windows flag
  public aboutmeShow: boolean = true;
  public activitiesShow: boolean = false;
  contactsShow: boolean = false;

  public deActivate($event: Event) {
    if (($event.target as HTMLElement).className === "home_section") {
      console.log("deActivate");
      this.active = "";
    }
    bus.$emit("close:sub_menu");
  }

  public activate(title: string) {
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
            self.whichWindow(title);
        }
        self.clickCount = 0; // reset the first click
      }, 200); // wait 0.2s
    }
  }

  public whichWindow(fileName: string) {
    switch (fileName) {
      case "aboutme":
        return (this.aboutmeShow = true);
      case "activities":
        return (this.activitiesShow = true);
      case "contacts":
        return (this.contactsShow = true);
      default:
        return null;
    }
  }

  public closeWindow(fileName: string) {
    fileName = fileName.replace(/(\s*)/g, "").toLowerCase();

    switch (fileName) {
      case "aboutme":
        return (this.aboutmeShow = false);
      case "activities":
        return (this.activitiesShow = false);
      case "contacts":
        return (this.contactsShow = false);
      default:
        return null;
    }
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

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575px) {
  ul {
    padding: 0;
  }
  li {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>