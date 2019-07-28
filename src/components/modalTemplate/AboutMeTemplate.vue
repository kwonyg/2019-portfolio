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
        <div class="birth_day">1993.05.07</div>
      </div>
    </article>
    <article>
      <h2>Languages & Web Skills</h2>
      <div class="skill_container">
        <ul class="skill_list">
          <li class="list_item" v-for="skill in skills" :key="skill.name">
            <img
              class="list_img skill_img"
              :src="skill.imgSrc"
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
              :src="framework.imgSrc"
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
              :src="database.imgSrc"
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
            <img class="list_img etc_img" :src="etc.imgSrc" :alt="etc.alt" />
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "html5",
          imgSrc: require(`../../images/aboutMe/html_Logo.png`),
          alt: "html 로고"
        },
        {
          name: "css",
          imgSrc: require(`../../images/aboutMe/css_Logo.png`),
          alt: "css 로고"
        },
        {
          name: "javascript",
          imgSrc: require(`../../images/aboutMe/javascript_Logo.svg`),
          alt: "javascript 로고"
        },
        {
          name: "java",
          imgSrc: require(`../../images/aboutMe/java_Logo.svg`),
          alt: "java 로고"
        },
        {
          name: "node.js",
          imgSrc: require(`../../images/aboutMe/nodejs_Logo.png`),
          alt: "node.js 로고"
        },
        {
          name: "python",
          imgSrc: require(`../../images/aboutMe/python_Logo.svg`),
          alt: "python 로고"
        },
        {
          name: "C",
          imgSrc: require(`../../images/aboutMe/c_Logo.png`),
          alt: "C 로고"
        },
        {
          name: "C++",
          imgSrc: require(`../../images/aboutMe/cpp_Logo.svg`),
          alt: "C++ 로고"
        }
      ],
      frameworks: [
        {
          name: "vue.js",
          imgSrc: require(`../../images/aboutMe/vue_Logo.svg`),
          alt: "vue.js 로고"
        },
        {
          name: "express",
          imgSrc: require(`../../images/aboutMe/express.svg`),
          alt: "express 로고"
        },
        {
          name: "spring",
          imgSrc: require(`../../images/aboutMe/spring_Logo.svg`),
          alt: "spring 로고"
        }
      ],
      databases: [
        {
          name: "mysql",
          imgSrc: require(`../../images/aboutMe/mysql_Logo.png`),
          alt: "mysql 로고"
        },
        {
          name: "mongodb",
          imgSrc: require(`../../images/aboutMe/mongodb_logo.png`),
          alt: "mongodb 로고"
        }
      ],
      etcs: [
        {
          name: "github",
          imgSrc: require(`../../images/aboutMe/github_Logo.svg`),
          alt: "github 로고"
        },
        {
          name: "firebase",
          imgSrc: require(`../../images/aboutMe/firebase_Logo.svg`),
          alt: "firebase 로고"
        }
      ]
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
