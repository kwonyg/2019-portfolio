<template>
  <div class="projects_wrap">
    <ul class="project_list">
      <li class="list_item">
        <article class="project_card">
          <div class="image_container">
            <img class="project_image" v-lazy="require(`@/assets/projects/DnD.png`)" alt />
          </div>

          <div class="content_container">
            <h1 class="title">퍼펙트매칭</h1>
            <div class="sub_title">사이드 프로젝트 팀 빌딩 플랫폼</div>
            <div class="due">2019년 02월 ~ 2019년 03월</div>
            <p
              class="description"
            >부산에서 진행되는 여러 개발스터디에 종종 참여하였습니다. 개인역량을 강화시킬 수 있어 좋았고, 부산 개발자 분들을 통해 현업이야기를 직접 들을 수 있어 개발 이외에 유익한 정보를 얻을 수 있어 즐거웠습니다.</p>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

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

h1 {
  margin: 10px 0 0 0;
}
.projects_wrap {
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
  height: 87%;
}

.image_container {
  border: 1px solid #000;
}
.image_container .project_image {
  width: 100%;
}
</style>