<template>
  <div class="activities_wrap">
    <ul class="activity_list">
      <li class="list_item">
        <div class="activity_card">
          <div class="header">
            <div class="user_container">
              <img
                class="user_image"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
              />
              <span class="user_nick">KwonYG</span>
            </div>
            <div class="date">2018년 02월 02일</div>
          </div>
          <div class="image_container">
            <img class="activity_image" v-lazy="require(`@/assets/activities/study.png`)" alt />
          </div>
          <div class="banner_container">
            <span class="banner_item heart">
              <img class="banner_image" src="@/assets/heart.svg" alt="좋아요 마크" />
              <span class="banner_title">likes</span>
            </span>
            <span class="banner_item comment">
              <img class="banner_image" src="@/assets/comment.svg" alt="댓글   마크" />
              <span class="banner_title">comments</span>
            </span>
          </div>
          <div class="content_container">
            <div class="title">개발자 스터디 모임</div>
            <p
              class="description"
            >부산에서 진행되는 여러 개발스터디에 종종 참여하였습니다. 개인역량을 강화시킬 수 있어 좋았고, 부산 개발자 분들을 통해 현업이야기를 직접 들을 수 있어 개발 이외에 유익한 정보를 얻을 수 있어 즐거웠습니다.</p>
          </div>
        </div>
      </li>
      <li class="list_item">
        <div class="activity_card">
          <div class="header">
            <div class="user_container">
              <img
                class="user_image"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
              />
              <span class="user_nick">KwonYG</span>
            </div>
            <div class="date">2018년 02월 02일</div>
          </div>
          <div class="image_container">
            <img class="activity_image" v-lazy="require(`@/assets/activities/volunteer.jpeg`)" alt />
          </div>
          <div class="banner_container">
            <span class="banner_item heart">
              <img class="banner_image" src="@/assets/heart.svg" alt="좋아요 마크" />
              <span class="banner_title">likes</span>
            </span>
            <span class="banner_item comment">
              <img class="banner_image" src="@/assets/comment.svg" alt="댓글   마크" />
              <span class="banner_title">comments</span>
            </span>
          </div>
          <div class="content_container">
            <div class="title">개발자 스터디 모임</div>
            <p
              class="description"
            >부산에서 진행되는 여러 개발스터디에 종종 참여하였습니다. 개인역량을 강화시킬 수 있어 좋았고, 부산 개발자 분들을 통해 현업이야기를 직접 들을 수 있어 개발 이외에 유익한 정보를 얻을 수 있어 즐거웠습니다.</p>
          </div>
        </div>
      </li>
      <li class="list_item">
        <div class="activity_card">
          <div class="header">
            <div class="user_container">
              <img
                class="user_image"
                src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
              />
              <span class="user_nick">KwonYG</span>
            </div>
            <div class="date">2018년 02월 02일</div>
          </div>
          <div class="image_container">
            <img class="activity_image" v-lazy="require(`@/assets/activities/boostcourse.png`)" alt />
          </div>
          <div class="banner_container">
            <span class="banner_item heart">
              <img class="banner_image" src="@/assets/heart.svg" alt="좋아요 마크" />
              <span class="banner_title">likes</span>
            </span>
            <span class="banner_item comment">
              <img class="banner_image" src="@/assets/comment.svg" alt="댓글   마크" />
              <span class="banner_title">comments</span>
            </span>
          </div>
          <div class="content_container">
            <div class="title">개발자 스터디 모임</div>
            <p
              class="description"
            >부산에서 진행되는 여러 개발스터디에 종종 참여하였습니다. 개인역량을 강화시킬 수 있어 좋았고, 부산 개발자 분들을 통해 현업이야기를 직접 들을 수 있어 개발 이외에 유익한 정보를 얻을 수 있어 즐거웠습니다.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { Vue, Component } from "vue-property-decorator";

@Component({
  computed: {
    ...mapGetters({
      acitivies: "getActivities"
    })
  }
})
export default class AboutmeTemplate extends Vue {}
</script>
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.activities_wrap {
  overflow: scroll;
  overflow-x: hidden;
  height: 93%;
}

.activity_card {
  border-bottom: 1px solid #000;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

.header .date {
  padding: 8px 0;
  font-size: 0.9em;
}

.user_container {
  display: flex;
  justify-content: left;
  align-items: center;
}
.user_container .user_image {
  border: 1px solid #000;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
}

.user_container .user_nick {
}

.image_container .activity_image {
  width: 100%;
  height: auto;
}

.banner_container {
  display: flex;
  padding: 5px;
}

.banner_container .banner_item {
  display: flex;
  margin-right: 10px;
}

.banner_container .banner_image {
  margin-right: 3px;
  width: 20px;
  height: 20px;
}

.banner_container .banner_title {
  font-size: 1em;
}

.content_container {
  padding: 10px;
  font-size: 0.9em;
}

.content_container .title {
  font-size: 1.2em;
}
</style>