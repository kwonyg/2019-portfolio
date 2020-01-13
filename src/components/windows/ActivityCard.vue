<template>
  <div class="activity_card">
    <div class="header">
      <div class="user_container">
        <img
          class="user_image"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
        />
        <span class="user_nick">KwonYG</span>
      </div>
      <div class="date">{{ activity.date }}</div>
    </div>
    <div class="image_container">
      <spinner class="loading_spinner" :loading="loading"></spinner>
      <img
        class="activity_image"
        :src="require(`@/assets/activities/${activity.img}`)"
        @load="endSpinner"
        alt
      />
    </div>
    <div class="banner_container">
      <span class="banner_item heart">
        <img class="banner_image" src="@/assets/heart.svg" alt="좋아요 마크" />
        <span class="banner_title">likes</span>
      </span>
      <span class="banner_item comment">
        <img class="banner_image" src="@/assets/comment.svg" alt="댓글 마크" />
        <span class="banner_title">comments</span>
      </span>
    </div>
    <div class="content_container">
      <div class="title">{{ activity.title }}</div>
      <div class="tag_container">
        <span class="tag" v-for="tag in activity.tags" :key="tag"
          >#{{ tag }}</span
        >
      </div>
      <div class="desription_container">
        <div class="more_button" @click="clickMore">내용 접기/펼치기▶</div>
        <p
          class="description"
          ref="description"
          v-html="activity.description"
          style="display:none"
        ></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Spinner from '@/components/Spinner.vue';
import { Acitivity } from '../../store/store.interface';

interface Activity {
  id: number;
  date: string;
  img: string;
  title: string;
  description: string;
}

@Component({
  components: {
    Spinner,
  },
})
export default class ActivityCard extends Vue {
  @Prop() public activity!: Acitivity;
  public loading: boolean = true;

  public clickMore($event: Event) {
    const target = ($event.target as HTMLElement)
      .nextElementSibling as HTMLElement;
    // const target = <HTMLElement>(
    //   ($event.target as HTMLElement).nextElementSibling
    // );

    if (target.style.display === 'none') {
      target.style.display = 'block';
    } else {
      target.style.display = 'none';
    }
  }

  public endSpinner() {
    this.loading = false;
  }
}
</script>
<style scoped>
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

.image_container {
  position: relative;
  min-height: 150px;
}

.loading_spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  font-weight: bold;
  font-size: 1.2em;
}

.tag_container {
  margin-bottom: 10px;
}
.tag {
  margin-right: 2px;
}
.more_button:hover {
  cursor: pointer;
}
</style>
