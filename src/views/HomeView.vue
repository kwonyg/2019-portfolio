<template>
  <section ref="home_section" class="home_section" @click="deActivate($event, 0)">
    <window-modal
      :title="'About Me'"
      ref="aboutme"
      :show="aboutmeShow"
      :w="300"
      :h="450"
      :x="aboutmeX"
      :y="aboutmeY"
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
      :x="projectsX"
      :y="projectsY"
      :z="projectsZindex"
      @close="closeWindow"
    >
      <template v-slot:content>
        <projects-template></projects-template>
      </template>
    </window-modal>

    <window-modal
      :title="'Help'"
      :show="helpShow"
      :w="350"
      :h="600"
      :x="helpX"
      :y="helpY"
      :z="helpZindex"
      @close="closeWindow"
    >
      <template v-slot:content>
        <help-template></help-template>
      </template>
    </window-modal>

    <window-modal
      :title="'Activities'"
      :show="activitiesShow"
      :w="350"
      :h="550"
      :x="activitiesX"
      :y="activitiesY"
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
      :w="350"
      :h="200"
      :x="contactsX"
      :y="contactsY"
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
      :w="350"
      :h="500"
      :x="guestbookX"
      :y="guestbookY"
      :z="guestbookZindex"
      @close="closeWindow"
    >
      <template v-slot:content>
        <guestbook-template></guestbook-template>
      </template>
    </window-modal>

    <div class="shortcut_container">
      <ul class="shortcut_list">
        <li class="list_item" :class="{ active: active === 'aboutme' }">
          <short-cut :imageUrl="'man.svg'" :title="'About Me'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active: active === 'projects' }">
          <short-cut :imageUrl="'folder.svg'" :title="'Projects'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active: active === 'activities' }">
          <short-cut :imageUrl="'sns.svg'" :title="'Activities'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active: active === 'contacts' }">
          <short-cut :imageUrl="'phone-call.svg'" :title="'Contacts'" @clickedIcon="activate"></short-cut>
        </li>
        <li class="list_item" :class="{ active: active == 'github' }">
          <short-cut :imageUrl="'github.png'" :title="'GitHub'" @clickedIcon="activate"></short-cut>
        </li>
      </ul>
      <ul class="shortcut_list">
        <li class="list_item" :class="{ active: active === 'guestbook' }">
          <short-cut :imageUrl="'web.svg'" :title="'Guest Book'" @clickedIcon="activate"></short-cut>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import bus from '@/utils/bus';
import {
  SMALL_USER_DEVICE_WIDTH,
  MEDIUM_USER_DEVICE_WIDTH,
  SMALL_PROJECT_WINDOW_WIDTH,
  MEDIUM_PROJECT_WINDOW_WIDTH,
  LARGE_PROJECT_WINDOW_WIDTH,
  DOUBLE_CLICK_TIME_OUT,
} from '../constants';
import ShortCut from '@/components/ShortCut.vue';
import WindowModal from '@/components/windows/WindowModal.vue';
import AboutmeTemplate from '@/components/windows/AboutmeTemplate.vue';
import ProjectsTemplate from '@/components/windows/ProjectsTemplate.vue';
import ActivitiesTemplate from '@/components/windows/ActivitiesTemplate.vue';
import ContactsTemplate from '@/components/windows/ContactsTemplate.vue';
import GuestbookTemplate from '@/components/windows/GuestbookTemplate.vue';
import HelpTemplate from '@/components//windows/HelpTemplate.vue';

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
    GuestbookTemplate,
    HelpTemplate,
  },
})
export default class HomeView extends Vue {
  private active: string = '';
  private clickCount: number = 0;

  private window: Window = {
    width: 0,
    height: 0,
  };

  // windows flag
  private aboutmeShow: boolean = false;
  private activitiesShow: boolean = false;
  private contactsShow: boolean = false;
  private projectsShow: boolean = false;
  private guestbookShow: boolean = false;
  private helpShow: boolean = true;

  // zIndex
  private mostZ: number = 3;
  private aboutmeZindex: number = 2;
  private activitiesZindex: number = 2;
  private contactsZindex: number = 2;
  private projectsZindex: number = 2;
  private guestbookZindex: number = 2;
  private helpZindex: number = 1;

  // Projects Window width, height
  private projectsWidth: number = 0;
  private projectsHeight: number = 0;

  // Modal positions
  private aboutmeX: number = 0;
  private aboutmeY: number = 0;
  private projectsX: number = 0;
  private projectsY: number = 0;
  private activitiesX: number = 0;
  private activitiesY: number = 0;
  private contactsX: number = 0;
  private contactsY: number = 0;
  private guestbookX: number = 0;
  private guestbookY: number = 0;
  private helpX: number = 0;
  private helpY: number = 0;

  private created() {
    bus.$on('calc:zindex', this.calcZindex);
    bus.$on('openWindow', this.whichWindow);
    this.$store.dispatch('INIT_DATAS');
    this.getViewsize();
    this.setProjectWindowSize();
    this.setWindowPositions();
  }

  private beforeDestory() {
    bus.$off('calc:zindex', this.calcZindex);
    bus.$off('openWindow', this.whichWindow);
  }

  private getViewsize() {
    this.window.width = window.innerWidth;
    this.window.height = window.innerHeight;
  }

  private setProjectWindowSize() {
    if (this.window.width <= SMALL_USER_DEVICE_WIDTH) {
      this.projectsWidth = SMALL_PROJECT_WINDOW_WIDTH;
      this.projectsHeight = this.window.height - 130;
    } else if (this.window.width <= MEDIUM_USER_DEVICE_WIDTH) {
      this.projectsWidth = MEDIUM_PROJECT_WINDOW_WIDTH;
      this.projectsHeight = this.window.height - 100;
    } else {
      this.projectsWidth = LARGE_PROJECT_WINDOW_WIDTH;
      this.projectsHeight = this.window.height - 100;
    }
  }

  private setWindowPositions() {
    if (this.window.width <= SMALL_USER_DEVICE_WIDTH) {
      return;
    } else if (this.window.width <= MEDIUM_USER_DEVICE_WIDTH) {
      this.aboutmeX = this.window.width / 50;
      this.aboutmeY = this.window.height / 50;
      this.projectsX = this.window.width / 15;
      this.projectsY = this.window.height / 15;
      this.activitiesX = this.window.width / 10;
      this.activitiesY = this.window.width / 10;
      this.contactsX = this.window.width / 30;
      this.contactsY = this.window.height / 30;
      this.guestbookX = this.window.width / 2;
      this.guestbookY = this.window.height / 5;
    } else {
      this.aboutmeX = this.window.width / 8;
      this.aboutmeY = this.window.height / 5;
      this.projectsX = this.window.width / 4;
      this.projectsY = this.window.height / 50;
      this.activitiesX = this.window.width / 10;
      this.activitiesY = this.window.width / 10;
      this.contactsX = this.window.width / 30;
      this.contactsY = this.window.height / 30;
      this.guestbookX = this.window.width / 1.5;
      this.guestbookY = this.window.height / 5;
      this.helpX = this.window.width / 1.3;
      this.helpY = this.window.height / 50;
    }
  }

  private deActivate($event: Event) {
    if (($event.target as HTMLElement).className === 'home_section') {
      this.active = '';
    }
    bus.$emit('close:sub_menu');
  }

  private activate(title: string) {
    title = title.replace(/(\s*)/g, '').toLowerCase();
    this.active = title;

    this.clickCount++;
    if (this.clickCount === 1) {
      const self = this;
      setTimeout(() => {
        switch (self.clickCount) {
          case 1:
            break;
          default:
            self.whichWindow(title);
            self.mostZ++;
        }
        self.clickCount = 0; // reset the first click
      }, DOUBLE_CLICK_TIME_OUT); // wait 0.2s
    }
  }

  private whichWindow(fileName: string) {
    interface Action<T> {
      (context: T, targetZindex: string, targetShow: string): void;
    }

    const action: Action<{ [key: string]: any }> = (
      context: { [key: string]: any }, // Vue의 인스턴스 내부 멤버들 타입이 any로 되어있음
      targetZindex: string,
      targetShow: string,
    ): void => {
      context[targetZindex] = context.mostZ;
      context[targetShow] = true;
    };

    const actions: { [key: string]: () => void } = {
      aboutme: () => action(this, 'aboutmeZindex', 'aboutmeShow'),
      projects: () => action(this, 'projectsZindex', 'projectsShow'),
      activities: () => action(this, 'activitiesZindex', 'activitiesShow'),
      contacts: () => action(this, 'contactsZindex', 'contactsShow'),
      guestbook: () => action(this, 'guestbookZindex', 'guestbookShow'),
      help: () => action(this, 'helpZindex', 'helpShow'),
      github: () => window.open('https://github.com/KwonYG', '_blank'),
      default: () => {
        alert('아직..개발...주...웅');
        return null;
      },
    };

    const doAction = actions[fileName];
    doAction();
  }

  private closeWindow(fileName: string) {
    fileName = fileName.replace(/(\s*)/g, '').toLowerCase();

    const actions: { [key: string]: () => void } = {
      aboutme: () => (this.aboutmeShow = false),
      projects: () => (this.projectsShow = false),
      activities: () => (this.activitiesShow = false),
      contacts: () => (this.contactsShow = false),
      guestbook: () => (this.guestbookShow = false),
      help: () => (this.helpShow = false),
      default: () => null,
    };

    const doAction = actions[fileName];
    doAction();
  }

  private calcZindex(title: string) {
    title = title.replace(/(\s*)/g, '').toLowerCase();
    this.mostZ++;

    const actions: { [key: string]: () => void } = {
      aboutme: () => (this.aboutmeZindex = this.mostZ),
      projects: () => (this.projectsZindex = this.mostZ),
      activities: () => (this.activitiesZindex = this.mostZ),
      contacts: () => (this.contactsZindex = this.mostZ),
      guestbook: () => (this.guestbookZindex = this.mostZ),
      help: () => (this.helpZindex = this.mostZ),
      default: () => null,
    };

    const doAction = actions[title];
    doAction();
  }
}
</script>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
section.home_section {
  position: relative;
  height: calc(100vh - 21px); /* vh: 뷰 포트의 높이 100분의 1 단위 */
}

section.home_section .shortcut_container {
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;
}

ul.shortcut_list {
  margin-top: 30px;
  height: 70px;
}

ul.shortcut_list li.list_item {
  cursor: pointer;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px dotted transparent;
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
</style>
