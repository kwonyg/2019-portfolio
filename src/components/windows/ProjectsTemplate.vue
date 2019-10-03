<template>
  <div class="projects_wrap">
    <ul class="project_list">
      <li class="list_item" v-for="project in projects" :key="project.id">
        <article class="project_card">
          <div class="image_container">
            <spinner class="loading_spinner" :loading="loading"></spinner>
            <img
              class="project_image"
              v-lazy="require(`@/assets/projects/${project.img}`)"
              alt="프로젝트 사진"
              @load="endSpinner"
            />
          </div>
          <div class="content_container">
            <div class="content_item">
              <h1 class="title">{{project.title}}</h1>
              <div class="sub_title">{{project.subTitle}}</div>
            </div>

            <div class="content_item due">
              <h2 class="info_tittle">제작 기간:</h2>
              {{project.date}}
            </div>
            <div class="content_item skills">
              <h2 class="info_tittle">사용 기술:</h2>
              <span class="skill" v-for="skill in project.skills" :key="skill">{{skill}}</span>
            </div>
            <div class="content_item url" v-if="project.url !==''">
              <h2 class="info_tittle">URL:</h2>
              <a :href="project.url" target="_blank">바로가기</a>
            </div>
            <div class="content_item description_container">
              <h2 class="info_tittle">설명:</h2>
              <p class="description" v-html="project.description"></p>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";
import Spinner from "@/components/Spinner.vue";
@Component({
  components: {
    Spinner
  },
  computed: {
    ...mapGetters({ projects: "getProjects" })
  }
})
export default class ProjectsTemplate extends Vue {
  loading: boolean = true;

  endSpinner() {
    this.loading = false;
  }
}
</script>

<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

h1 {
  font-size: 1.5em;
  margin: 10px 0 10px 0;
}
h2 {
  margin-top: 20px;
  font-size: 0.9em;
}
.projects_wrap {
  font-family: "Gothic A1", sans-serif;
  padding: 20px;
  overflow: scroll;
  overflow-x: hidden;
  height: 87%;
  background-color: #fff;
}

.project_card {
  border: 1px dotted #000;
  background-color: #fff;
  padding: 30px;
}

.loading_spinner {
  left: 50%;
  transform: translate(-50%);
}

.content_item {
  margin-bottom: 10px;
}

.skill {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 20px;
}

.image_container .project_image {
  width: 100%;
}

.info_tittle {
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  margin: 0;
}
</style>