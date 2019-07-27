<template>
  <section class="projects_section">
    <h1>Projects</h1>
    <ul class="project_list">
      <li class="list_item">
        <article class="project_container">
          <div class="project_summery_wrap">
            <div class="project_img_container">
              <img
                class="project_img"
                src="../images/projects/m_ironmental_preview.gif"
                alt="프로젝트 이미지"
              />
            </div>
            <div class="project_summery">
              <h2>아이언 멘탈 - 면접 질문 메일링 서비스</h2>
              <div class="description">
                매주 면접 질문을 이메일 주소로 보내주는 서비스입니다.
              </div>
              <div class="skills">Vue.js, Spring Boot, MySQL</div>
              <div class="github">
                Github:
                <a href="https://github.com/Devrother/ironmental-frontend"
                  >깃허브 저장소 바로가기</a
                >
              </div>
              <div class="url" v-if>ironmental.net</div>
              <div class="date">2019-07-22</div>
              <div class="project_detail">
                Vue.js를 통해 프론트 개발을 맡았습니다.
              </div>
            </div>
          </div>
        </article>
      </li>
      <li class="list_item">
        <article class="project_container">
          <div class="project_summery_wrap">
            <div class="project_img_container">
              <img
                class="project_img"
                src="../images/projects/m_ironmental_preview.gif"
                alt="프로젝트 이미지"
              />
            </div>
            <div class="project_summery">
              <h2>아이언 멘탈 - 면접 질문 메일링 서비스</h2>
              <div class="description">
                매주 면접 질문을 이메일 주소로 보내주는 서비스입니다.
              </div>
              <div class="skills">Vue.js, Spring Boot, MySQL</div>
              <div class="github">
                Github:
                <a href="https://github.com/Devrother/ironmental-frontend"
                  >깃허브 저장소 바로가기</a
                >
              </div>
              <div class="url" v-if>ironmental.net</div>
              <div class="date">2019-07-22</div>
              <div class="project_detail">
                Vue.js를 통해 프론트 개발을 맡았습니다.
              </div>
            </div>
          </div>
        </article>
      </li>
      <li class="list_item">
        <article class="project_container">
          <div class="project_summery_wrap">
            <div class="project_img_container">
              <img
                class="project_img"
                src="../images/projects/m_ironmental_preview.gif"
                alt="프로젝트 이미지"
              />
            </div>
            <div class="project_summery">
              <h2>아이언 멘탈 - 면접 질문 메일링 서비스</h2>
              <div class="description">
                매주 면접 질문을 이메일 주소로 보내주는 서비스입니다.
              </div>
              <div class="skills">Vue.js, Spring Boot, MySQL</div>
              <div class="github">
                Github:
                <a href="https://github.com/Devrother/ironmental-frontend"
                  >깃허브 저장소 바로가기</a
                >
              </div>
              <div class="url" v-if>ironmental.net</div>
              <div class="date">2019-07-22</div>
              <div class="project_detail">
                Vue.js를 통해 프론트 개발을 맡았습니다.
              </div>
            </div>
          </div>
        </article>
      </li>
      <li class="list_item">
        <article class="project_container">
          <div class="project_summery_wrap">
            <div class="project_img_container">
              <img
                class="project_img"
                src="../images/projects/m_ironmental_preview.gif"
                alt="프로젝트 이미지"
              />
            </div>
            <div class="project_summery">
              <h2>아이언 멘탈 - 면접 질문 메일링 서비스</h2>
              <div class="description">
                매주 면접 질문을 이메일 주소로 보내주는 서비스입니다.
              </div>
              <div class="skills">Vue.js, Spring Boot, MySQL</div>
              <div class="github">
                Github:
                <a href="https://github.com/Devrother/ironmental-frontend"
                  >깃허브 저장소 바로가기</a
                >
              </div>
              <div class="url" v-if>ironmental.net</div>
              <div class="date">2019-07-22</div>
              <div class="project_detail">
                Vue.js를 통해 프론트 개발을 맡았습니다.
              </div>
            </div>
          </div>
        </article>
      </li>
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

<style scoped>
h2 {
  margin-top: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 50px;
}

.project_summery_wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.project_img_container {
  margin-right: 30px;
  width: 300px;
}

.project_img {
  max-width: 100%;
  height: auto;
}

.project_summery > * {
  margin-bottom: 10px;
}
</style>
