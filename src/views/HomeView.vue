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
          :url="images.phone"
          :fileName="'Phone'"
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
    </div>

    <window-modal v-if="showModal" @close="closeWindow">
      <div slot="body">
        <contacts-template></contacts-template>
      </div>
    </window-modal>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
// import VueMarkdown from "vue-markdown";
import ShortCut from "../components/ShortCut.vue";
// import AboutMeTemplate from "../components/AboutMeTemplate.vue";
// import ProjectsTemplate from "../components/ProjectsTemplate.vue";
// import ActivitiesTemplate from "../components/ActivitiesTemplate.vue";
import ContactsTemplate from "../components/ContactsTemplate.vue";
import WindowModal from "../components/WindowModal.vue";

export default {
  name: "home",
  components: {
    ShortCut,
    WindowModal,
    ContactsTemplate
    // ActivitiesTemplate
    // ProjectsTemplate
    // VueMarkdown,
    // AboutMeTemplate
  },

  data() {
    return {
      images: {
        folder: require(`@/images/shortcuts/folder.png`),
        github: require(`@/images/shortcuts/github.png`),
        email: require(`@/images/shortcuts/gmail.png`),
        phone: require(`@/images/shortcuts/phone.png`),
        talk: require(`@/images/shortcuts/talk.png`)
      },
      showModal: false
    };
  },

  computed: {
    ...mapGetters({
      windowData: "fetchedWindowData"
    })
  },

  methods: {
    openWindow({ fileName }) {
      fileName = fileName.replace(/(\s*)/g, "").toLowerCase();

      if (fileName === "talk") {
        console.log("not yet");
      } else {
        this.$store.dispatch("GET_WINDOW_DATA", { fileName });
      }

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
  height: 100%; /* 모바일때 height를 없애기*/
  margin: 0 0 -50px 0;
}
.main_wrap {
  background-image: url("../assets/saharar.svg");

  min-height: 100%;
  background-position: center;
  background-size: cover;
}
.main_container {
  width: 0%;
  height: 600px; /* 모바일 크기 정해야함*/
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.main_container > * {
  /* 알아보기 */
  flex: 1 1 1;
}

.list_item {
  color: #404040;
  max-width: 980px; /* 모바일 대응 안해도 되게 선언하는 법*/
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #e5e5e5;
  1border: 1px solid #262626;
  border-radius: 10px;
}
</style>
