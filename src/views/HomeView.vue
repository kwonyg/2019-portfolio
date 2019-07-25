<template>
  <section class="main_section">
    <div class="main_wrap">
      <div class="main_container">
        <short-cut
          :url="images.folder"
          :fileName="'About Me'"
          @clickShortcut="toggle"
        ></short-cut>
        <short-cut
          :url="images.folder"
          :fileName="'Projects'"
          @clickShortcut="toggle"
        ></short-cut>
        <short-cut
          :url="images.folder"
          :fileName="'Activities'"
          @clickShortcut="toggle"
        ></short-cut>
        <short-cut
          :url="images.email"
          :fileName="'e-mail'"
          @clickShortcut="toggle"
        ></short-cut>
        <short-cut
          :url="images.phone"
          :fileName="'Phone'"
          @clickShortcut="toggle"
        ></short-cut>
        <short-cut
          :url="images.github"
          :fileName="'Github'"
          @clickShortcut="toggle"
        ></short-cut>
        <short-cut
          :url="images.talk"
          :fileName="'Talk'"
          @clickShortcut="toggle"
        ></short-cut>
      </div>
    </div>

    <window-modal v-if="showModal" @close="toggle">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">Hi!</h3>
      <div slot="body">yeah~</div>
    </window-modal>
  </section>
</template>

<script>
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

  methods: {
    toggle() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style scoped>
.main_section {
  height: 95%; /* 모바일때 height를 없애기*/
}
.main_wrap {
  background-image: url("../assets/saharar.svg");
  margin: 0;
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
.main_container {
  width: 0%;
  height: 980px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.main_container > * {
  flex: 1 1 1;
}
</style>
