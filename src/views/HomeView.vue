<template>
  <section class="main_section">
    <div class="main_wrap">
      <div class="main_container">
        <short-cut :url="images.folder" :fileName="'About Me'"></short-cut>
        <short-cut :url="images.folder" :fileName="'Projects'"></short-cut>
        <short-cut :url="images.folder"></short-cut>
        <short-cut :url="images.folder"></short-cut>
      </div>
    </div>
  </section>
</template>

<script>
import ShortCut from "../components/ShortCut.vue";
export default {
  name: "home",
  components: {
    ShortCut
  },

  data() {
    return {
      images: {
        folder: require(`@/images/shortcuts/folder.png`)
      }
    };
  }
};
</script>

<style scoped>
.main_section {
  height: 95%;
}
.main_wrap {
  background-image: url("../assets/saharar.svg");
  margin: 0;
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
