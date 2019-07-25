<template>
  <section class="main_section">
    <div class="main_wrap">
      <div class="main_container">
        <short-cut :url="images.folder" :fileName="'About Me'"></short-cut>
        <short-cut :url="images.folder" :fileName="'Projects'"></short-cut>
        <short-cut :url="images.folder" :fileName="'Activities'"></short-cut>
        <short-cut :url="images.github" :fileName="'github'"></short-cut>
        <short-cut :url="images.email" :fileName="'email'"></short-cut>
        <short-cut :url="images.folder" :fileName="'About Me'"></short-cut>
        <short-cut :url="images.folder" :fileName="'Projects'"></short-cut>
        <short-cut :url="images.folder" :fileName="'Activities'"></short-cut>
        <short-cut :url="images.github" :fileName="'github'"></short-cut>
        <short-cut :url="images.email" :fileName="'email'"></short-cut>
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
        folder: require(`@/images/shortcuts/folder.png`),
        github: require(`@/images/shortcuts/github.png`),
        email: require(`@/images/shortcuts/gmail.png`)
      }
    };
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
