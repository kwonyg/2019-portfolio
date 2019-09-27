<template>
  <section ref="home_section" class="home_section" @click="deActivate($event,0)">
    <window-modal
      :title="'About Me'"
      :show="aboutmeShow"
      :w="300"
      :h="450"
      :z="aboutmeZindex"
      @close="closeWindow"
    >
      <template v-slot:content>
        <aboutme-template></aboutme-template>
      </template>
    </window-modal>

    <window-modal
      :title="'Projects'"
      :show="projectsShow"
      :w="projectsWidth"
      :h="projectsHeight"
      :z="projectsZindex"
      @close="closeWindow"
    >
      <template v-slot:content>
        <projects-template></projects-template>
      </template>
    </window-modal>

    <window-modal
      :title="'Activities'"
      :show="activitiesShow"
      :w="350"
      :h="550"
      :z="activitiesZindex"
      @close="closeWindow"
    >
      <template v-slot:content>
        <activities-template></activities-template>
      </template>
    </window-modal>

    <window-modal
      :title="'Contacts'"
      :show="contactsShow"
      :w="370"
      :h="200"
      :z="contactsZindex"
      @close="closeWindow"
    >
      <template v-slot:content>
        <contacts-template></contacts-template>
      </template>
    </window-modal>

    <window-modal
      :title="'Guest Book'"
      :show="guestbookShow"
      :w="370"
      :h="500"
      :z="guestbookZindex"
      @close="closeWindow"
    >
      <template v-slot:content>
        <guestbook-template></guestbook-template>
      </template>
    </window-modal>

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
import { Vue, Component, Watch } from "vue-property-decorator";
import bus from "@/utils/bus";
import ShortCut from "@/components/ShortCut.vue";

import WindowModal from "@/components/windows/WindowModal.vue";
import AboutmeTemplate from "@/components/windows/AboutmeTemplate.vue";
import ProjectsTemplate from "@/components/windows/ProjectsTemplate.vue";
import ActivitiesTemplate from "@/components/windows/ActivitiesTemplate.vue";
import ContactsTemplate from "@/components/windows/ContactsTemplate.vue";
import GuestbookTemplate from "@/components/windows/GuestbookTemplate.vue";

interface Window {
  width: number;
  height: number;
}

@Component({
  components: {
    ShortCut,
    WindowModal,
    AboutmeTemplate,
    ProjectsTemplate,
    ActivitiesTemplate,
    ContactsTemplate,
    GuestbookTemplate
  }
})
export default class HomeView extends Vue {
  public active: string = "";
  public clickCount: number = 0;

  public window: Window = {
    width: 0,
    height: 0
  };

  // windows flag
  public aboutmeShow: boolean = true;
  public activitiesShow: boolean = false;
  public contactsShow: boolean = false;
  public projectsShow: boolean = false;
  public guestbookShow: boolean = false;

  // zIndex
  public mostZ: number = 3;
  public aboutmeZindex: number = 2;
  public activitiesZindex: number = 2;
  public contactsZindex: number = 2;
  public projectsZindex: number = 2;
  public guestbookZindex: number = 2;

  // Projects Window width, height
  public projectsWidth: number = 0;
  public projectsHeight: number = 0;

  public created() {
    bus.$on("calc:zindex", this.calcZindex);
    this.$store.dispatch("INIT_DATAS");
    this.getViewsize();
    this.setProjectSize();
  }

  public beforeDestory() {
    bus.$off("calc:zindex", this.calcZindex);
  }

  public getViewsize() {
    this.window.width = window.innerWidth;
    this.window.height = window.innerHeight;
  }

  public setProjectSize() {
    if (this.window.width <= 450) {
      this.projectsWidth = 350;
      this.projectsHeight = 550;
    } else if (this.window.width <= 800) {
      this.projectsWidth = 700;
      this.projectsHeight = 600;
    } else {
      this.projectsWidth = 800;
      this.projectsHeight = 600;
    }
  }

  public deActivate($event: Event) {
    if (($event.target as HTMLElement).className === "home_section") {
      console.log("deActivate");
      this.active = "";
    }
    bus.$emit("close:sub_menu");
  }

  public activate(title: string) {
    console.log("activate!");
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
            self.mostZ++;
        }
        self.clickCount = 0; // reset the first click
      }, 200); // wait 0.2s
    }
  }

  public whichWindow(fileName: string) {
    switch (fileName) {
      case "aboutme":
        this.aboutmeZindex = this.mostZ;
        return (this.aboutmeShow = true);
      case "projects":
        this.projectsZindex = this.mostZ;
        return (this.projectsShow = true);
      case "activities":
        this.activitiesZindex = this.mostZ;
        return (this.activitiesShow = true);
      case "contacts":
        this.contactsZindex = this.mostZ;
        return (this.contactsShow = true);
      case "guestbook":
        this.guestbookZindex = this.mostZ;
        return (this.guestbookShow = true);
      default:
        alert("아직..개발...주...웅");
        return null;
    }
  }

  public closeWindow(fileName: string) {
    fileName = fileName.replace(/(\s*)/g, "").toLowerCase();

    switch (fileName) {
      case "aboutme":
        return (this.aboutmeShow = false);
      case "projects":
        return (this.projectsShow = false);
      case "activities":
        return (this.activitiesShow = false);
      case "contacts":
        return (this.contactsShow = false);
      case "guestbook":
        return (this.guestbookShow = false);
      default:
        return null;
    }
  }

  public calcZindex(title: string) {
    title = title.replace(/(\s*)/g, "").toLowerCase();
    this.mostZ++;
    switch (title) {
      case "aboutme":
        return (this.aboutmeZindex = this.mostZ);
      case "projects":
        return (this.projectsZindex = this.mostZ);
      case "activities":
        return (this.activitiesZindex = this.mostZ);
      case "contacts":
        return (this.contactsZindex = this.mostZ);
      case "guestbook":
        return (this.guestbookZindex = this.mostZ);
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