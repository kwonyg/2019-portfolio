<template>
  <section class="projects_section">
    <h1>Projects</h1>
    <ul class="project_list">
      <li class="list_item">개요</li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "사이드 프로젝트 팀원 매칭 플랫폼(가명)",
          summery:
            "사이드 프로젝트 팀원을 구하는 플랫폼입니다. 프론트 개발과 기획을 맡았습니다. 개발자, 디자이너, 기획자, 마케터 직군으로 나누어 팀원을 구할 수 있도록 하였으며, 규모에 따라 원하는 인원을 정할 수 있게 기획하였습니다.",
          skills: ["Vue.js", "Spring Boot", "MySQL"]
        },
        {
          name: "아이언 멘탈 - 면접 질문 메일링 서비스",
          summery:
            "매주 면접 질문을 이메일 주소로 보내주는 서비스입니다. Vue.js를 통해 프론트 개발을 맡았습니다. ",
          skills: ["Vue.js", "Node.js", "MongoDB", "AWS"]
        },
        {
          name: "아이언 멘탈 - 면접 질문 메일링 서비스",
          summery:
            "매주 면접 질문을 이메일 주소로 보내주는 서비스입니다. Vue.js를 통해 프론트 개발을 맡았습니다. ",
          skills: ["Vue.js", "Node.js", "MongoDB", "AWS"]
        },
        {
          name: "TODO 리스트 - 프로그래머스 섬머캠프 인턴 과제",
          summery:
            "프로그래머스 섬머캠프 인턴 과제였던 투두 리스트입니다. 기본적인 CRUD 이 외에 date-picker, 배포 등의 요구 사항이 있었으며, Node.js(express)와 Vue.js(Vuetify)를 사용해 구현하였습니다.",
          skills: ["Vue.js", "Node.js", "MySQL", "Vuetify", "Sequelize", "AWS"]
        }
      ]
    };
  }
};
</script>

<style scoped></style>
