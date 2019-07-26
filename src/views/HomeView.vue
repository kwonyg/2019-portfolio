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
      <h3 slot="header">{{ windowData.header }}</h3>
      <div slot="body">
        <div :v-html="windowData.content"></div>
      </div>
    </window-modal>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ShortCut from "../components/ShortCut.vue";
import WindowModal from "../components/WindowModal.vue";

export default {
  name: "home",
  components: {
    ShortCut,
    WindowModal
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

      this.showModal = !this.showModal;
    },

    closeWindow() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
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
  flex: 1 1 1;
}
</style>
