<template>
  <div class="projects_wrap">
    <ul class="project_list">
      <li class="list_item">
        <article class="project_card">
          <div class="image_container">
            <img class="project_image" v-lazy="require(`@/assets/projects/DnD.png`)" alt />
          </div>

          <div class="content_container">
            <div class="content_item">
              <h1 class="title">퍼펙트매칭</h1>
              <div class="sub_title">사이드 프로젝트 팀 빌딩 플랫폼</div>
            </div>

            <div class="content_item due">
              <div class="info_tittle">제작 기간:</div>2019년 02월 ~ 2019년 03월
            </div>
            <div class="content_item skills">
              <div class="info_tittle">사용 기술:</div>Vue.js, Vuetify, SpringBoot, MySQL
            </div>
            <div class="content_item url">
              <div class="info_tittle">URL:</div>
              <a href="https://www.ironmental.net" target="_blank">www.ironmental.net</a>
            </div>
            <div class="content_item description_container">
              <div class="info_tittle">설명:</div>
              <p
                class="description"
              >부산에서 진행되는 여러 개발스터디에 종종 참여하였습니다. 개인역량을 강화시킬 수 있어 좋았고, 부산 개발자 분들을 통해 현업이야기를 직접 들을 수 있어 개발 이외에 유익한 정보를 얻을 수 있어 즐거웠습니다.</p>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProjectsTemplate extends Vue {}
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
  margin: 10px 0 0 0;
}
.projects_wrap {
  padding: 20px;
  overflow: scroll;
  overflow-x: hidden;
  height: 87%;
  background-color: #ecfbfe;
}

.project_card {
  border: 1px dotted #000;
  background-color: #fff;
  padding: 30px;
}

.image_container {
  border: 1px dotted #000;
}

.content_item {
  margin-bottom: 10px;
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