<template>
  <section class="activity_section">
    <h1>Activities</h1>
    <ul class="acitivity_list">
      <li>
        <article>
          <div class="activity_info_container">
            <h2>활동 명</h2>
            <p class="description">
              봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.
            </p>
            <div class="date">2019.03.03</div>
          </div>
        </article>
      </li>
      <li>
        <article>
          <div class="activity_wrap">
            <div class="activity_img_container" v-if>
              <img
                class="activity_img"
                src="../../images/projects/ironmental_1.png"
                alt
              />
            </div>
            <div class="activity_info_container">
              <h2>활동 명</h2>
              <p class="description">
                봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.
              </p>
              <div class="date">2019.03.03</div>
            </div>
          </div>
        </article>
      </li>
      <li>
        <article>
          <div class="activity_wrap">
            <div class="activity_img_container" v-if>
              <img
                class="activity_img"
                src="../../images/projects/ironmental_1.png"
                alt
              />
            </div>
            <div class="activity_info_container">
              <h2>활동 명</h2>

              <p class="description">
                매주 면접 질문을 이메일 주소로 보내주는 서비스입니다. 매주 면접
                질문을 이메일 주소로 보내주는 서비스입니다. 매주 면접 질문을
                이메일 주소로 보내주는 서비스입니다. 매주 면접 질문을 이메일
                주소로 보내주는 서비스입니다. 매주 면접 질문을 이메일 주소로
                보내주는 서비스입니다. 매주 면접 질문을 이메일 주소로 보내주는
                서비스입니다.
              </p>
              <div class="skills">Vue.js, Spring Boot, MySQL</div>
              <div class="github">
                Github:
                <a href="https://github.com/Devrother/ironmental-frontend"
                  >깃허브 저장소 바로가기</a
                >
              </div>
              <div class="url" v-if>ironmental.net</div>

              <div class="project_detail">프론트 개발을 맡았다.</div>

              <div class="date">2019.03.03</div>
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
  margin: 0 auto;
  max-width: 600px;
  color: #ffffff;
  background-color: #ff9340;
  margin-bottom: 100px;
  border-radius: 20px;

  -webkit-box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
}

.activity_img_container {
  margin: 0 auto;
  width: 100%;
}

.activity_img {
  /* border-radius: 20px; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 2px solid #fff;
  max-width: 100%;
  height: auto;
}

.activity_info_container {
  padding: 20px;
}
</style>
