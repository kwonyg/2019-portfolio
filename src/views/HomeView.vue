<template>
  <section class="main_section">
    <div class="main_wrap">
      <div class="main_container">
        <short-cut
          ref="shortCut"
          :url="images.folder"
          :fileName="'About Me'"
          @clickShortcut="openWindow"
        ></short-cut>
        <short-cut
          ref="shortCut"
          :url="images.folder"
          :fileName="'Projects'"
          @clickShortcut="openWindow"
        ></short-cut>
        <short-cut
          ref="shortCut"
          :url="images.folder"
          :fileName="'Activities'"
          @clickShortcut="openWindow"
        ></short-cut>
        <short-cut
          ref="shortCut"
          :url="images.email"
          :fileName="'e-mail'"
          @clickShortcut="openWindow"
        ></short-cut>
        <short-cut
          ref="shortCut"
          :url="images.contact"
          :fileName="'Contact'"
          @clickShortcut="openWindow"
        ></short-cut>
        <short-cut
          ref="shortCut"
          :url="images.github"
          :fileName="'Github'"
          @clickShortcut="openWindow"
        ></short-cut>
        <short-cut
          ref="shortCut"
          :url="images.talk"
          :fileName="'Talk'"
          @clickShortcut="openWindow"
        ></short-cut>
      </div>
      <task-bar class="task_bar"></task-bar>
    </div>

    <window-modal v-if="showModal" @close="closeWindow">
      <div slot="body">
        <component :is="template" v-if="template"></component>
        <div v-if="!template">개발 중이에요 :)</div>
      </div>
    </window-modal>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ShortCut from "../components/ShortCut.vue";
import WindowModal from "../components/WindowModal.vue";
import TaskBar from "../components/TaskBar.vue";

export default {
  name: "home",
  components: {
    ShortCut,
    WindowModal,
    TaskBar
  },

  data() {
    return {
      images: {
        folder: require(`@/images/shortcuts/folder.png`),
        github: require(`@/images/shortcuts/github.png`),
        email: require(`@/images/shortcuts/gmail.png`),
        contact: require(`@/images/shortcuts/phone.png`),
        talk: require(`@/images/shortcuts/talk.png`)
      },
      template: null,
      showModal: false
    };
  },

  computed: {
    ...mapGetters({
      windowData: "fetchedWindowData"
    })
  },

  methods: {
    whichTemplate(fileName) {
      switch (fileName) {
        case "aboutme":
          return () =>
            import("../components/modalTemplate/AboutMeTemplate.vue");
        case "projects":
          return () =>
            import("../components/modalTemplate/ProjectsTemplate.vue");
        case "contact":
          return () =>
            import("../components/modalTemplate/ContactsTemplate.vue");
        case "activities":
          return () =>
            import("../components/modalTemplate/ActivitiesTemplate.vue");
        case "talk":
          return () => import("../components/modalTemplate/TalkTemplate.vue");
        default:
          return null;
      }
    },

    openWindow({ fileName }) {
      fileName = fileName.replace(/(\s*)/g, "").toLowerCase();
      this.template = this.whichTemplate(fileName);
      this.showModal = true;
    },

    closeWindow() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.main_section {
  height: 100%;
}

.main_wrap {
  position: relative;
  background-image: url("../assets/camping.jpg");
  min-height: 100%;
  background-position: bottom;
  background-size: cover;
}

.main_container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 600px;
  width: 0%;
  padding-bottom: 50px;
}

.list_item {
  color: #404040;
  max-width: 980px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #e5e5e5;
  border-radius: 10px;
}

.task_bar {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
