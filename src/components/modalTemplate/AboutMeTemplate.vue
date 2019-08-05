<template>
  <section class="aboutme_section">
    <h1>About Me</h1>
    <article>
      <h2>Who I am..</h2>
      <div class="intro_container">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
          alt="avatar"
        />
        <div class="name">권영근</div>
      </div>
    </article>
    <article>
      <h2>Languages & Web Skills</h2>
      <div class="skill_container">
        <ul class="skill_list">
          <li class="list_item" v-for="skill in skills" :key="skill.name">
            <img
              class="list_img skill_img"
              :src="require(`@/images/aboutMe/${skill.imgSrc}`)"
              :alt="skill.alt"
            />
          </li>
        </ul>
      </div>
    </article>

    <article>
      <h2>Frameworks</h2>
      <div class="framework_container">
        <ul class="framework_list">
          <li
            class="list_item"
            v-for="framework in frameworks"
            :key="framework.name"
          >
            <img
              class="list_img framework_img"
              :src="require(`@/images/aboutMe/${framework.imgSrc}`)"
              :alt="framework.alt"
            />
          </li>
        </ul>
      </div>
    </article>

    <article>
      <h2>DataBase</h2>
      <div class="database_container">
        <ul class="database_list">
          <li
            class="list_item"
            v-for="database in databases"
            :key="database.name"
          >
            <img
              class="list_img database_img"
              :src="require(`@/images/aboutMe/${database.imgSrc}`)"
              :alt="database.alt"
            />
          </li>
        </ul>
      </div>
    </article>

    <article>
      <h2>Etc</h2>
      <div class="etc_container">
        <ul class="etc_list">
          <li class="list_item" v-for="etc in etcs" :key="etc.name">
            <img
              class="list_img etc_img"
              :src="require(`@/images/aboutMe/${etc.imgSrc}`)"
              :alt="etc.alt"
            />
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
import AboutMeData from "../../Data/aboutMe.js";
export default {
  data() {
    return {
      skills: AboutMeData.skills,
      frameworks: AboutMeData.frameworks,
      databases: AboutMeData.databases,
      etcs: AboutMeData.etcs
    };
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
}

.aboutme_section {
  text-align: center;
  margin: 0 auto;
  width: 70%;
}

.list_img {
  width: 200px;
  height: 200px;
  margin: 20px;
}
</style>
