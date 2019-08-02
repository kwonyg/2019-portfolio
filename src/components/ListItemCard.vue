<template>
  <article class="item_article">
    <div class="item_wrap">
      <div class="item_img_container" v-if="item.img != null">
        <img class="item_img" :src="initImagePath()" alt="활동사진" />
      </div>
      <div class="item_info_container imaged" v-if="item.img != null">
        <h2 class="item_title">{{ item.title }}</h2>
        <p class="item_detail">{{ item.detail }}</p>
        <div class="item_date">{{ item.date }}</div>
      </div>

      <div class="item_info_container noimage" v-if="item.img == null">
        <h2 class="item_title">{{ item.title }}</h2>
        <p class="item_detail">{{ item.detail }}</p>
        <div class="item_date">{{ item.date }}</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: Object
  },

  methods: {
    initImagePath() {
      return require(`@/${this.item.img}`);
    }
  }
};
</script>

<style scoped>
.item_article {
  border-radius: 20px;
  -webkit-box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
}

.item_wrap {
  border-radius: 20px;
}

.item_img_container {
  margin: 0 auto;
  width: 100%;
}

.item_img {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 2px solid #fff;

  width: 100%;
  background-color: #fff;
  height: auto;
}

.item_info_container {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #626973;
  padding: 20px;
}

.noimage {
  border-radius: 20px;
}
</style>
