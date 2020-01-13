<template>
  <article class="project_card">
    <div class="image_container">
      <spinner class="loading_spinner" :loading="loading"></spinner>
      <img
        class="project_image"
        :src="require(`@/assets/projects/${project.img}`)"
        alt="프로젝트 사진"
        @load="endSpinner"
      />
    </div>
    <div class="content_container">
      <div class="content_item">
        <h1 class="title">{{ project.title }}</h1>
        <div class="sub_title">{{ project.subTitle }}</div>
      </div>

      <div class="content_item due">
        <h2 class="info_tittle">제작 기간:</h2>
        {{ project.date }}
      </div>
      <div class="role_container">
        <h2 class="info_tittle">역할:</h2>
        <span class="role" v-for="role in project.role" :key="role">{{
          role
        }}</span>
      </div>
      <div class="content_item skills">
        <h2 class="info_tittle">사용 기술:</h2>
        <span class="skill" v-for="skill in project.skills" :key="skill">{{
          skill
        }}</span>
      </div>
      <div class="content_item url" v-if="project.url !== ''">
        <h2 class="info_tittle">URL:</h2>
        <a :href="project.url" target="_blank">바로가기</a>
      </div>
      <div class="content_item description_container">
        <h2 class="info_tittle">설명:</h2>
        <p class="description" v-html="project.description"></p>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Spinner from '@/components/Spinner.vue';

interface Project {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  date: string;
  description: string;
  url: string;
  role: string[];
  skills: string[];
}

@Component({
  components: {
    Spinner,
  },
})
export default class ProjectCard extends Vue {
  @Prop() private project!: Project;
  private loading: boolean = true;

  private endSpinner() {
    this.loading = false;
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}

h1 {
  font-size: 1.5em;
  margin: 10px 0 10px 0;
}
h2 {
  margin: 20px 0 0 0;
  font-size: 1em;
  font-weight: bold;
}
.project_card {
  border: 1px dotted #000;
  background-color: #fff;
  padding: 30px;
}

.image_container {
  position: relative;
}

.loading_spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content_item {
  margin-bottom: 10px;
}
.role {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  background-color: #eaeaea;
  border-radius: 20px;
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
}

.description {
  margin: 0;
}
</style>
