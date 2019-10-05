<template>
  <section class="aboutme_wrap">
    <div class="info_container">
      <img
        class="my_image"
        src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
      />
      <div class="name">권 영 근</div>
    </div>
    <article class="laguage_article">
      <h2>
        <u>Languages</u>
      </h2>
      <h3>Intermediate</h3>
      <div class="skill_group">HTML, CSS, JAVASCRIPT, NODE.JS</div>
      <h3>Basic</h3>
      <div class="skill_group">JAVA, PYTHON, C, C++</div>
    </article>
    <article class="framework_article">
      <h2>
        <u>Frameworks</u>
      </h2>
      <div class="skill_group">Vue.js, Express, Spring 4, Spring Boot</div>
    </article>
    <article class="database_article">
      <h2>
        <u>Data Base</u>
      </h2>
      <div class="skill_group">MySQL, MongoDB</div>
    </article>
    <article class="etc_article">
      <h2>
        <u>Etc</u>
      </h2>
      <div class="skill_group">GIT, Fire Base</div>
    </article>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AboutmeTemplate extends Vue {}
</script>

<style scoped>
article {
  text-align: center;
  margin-bottom: 80px;
}
h2 {
  font-size: 1.8em;
}
h3 {
  font-size: 1.1em;
}
.aboutme_wrap {
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
  height: 89%;
}

.info_container {
  text-align: center;
}
.info_container .my_image {
  border: 1px solid #000;
  width: 200px;
  height: 200px;
  margin-right: 10px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
}
.info_container .name {
  font-size: 1.3em;
}

.skill_group {
  1font-family: "Press Start 2P", cursive;
  font-size: 0.8em;
}
</style>