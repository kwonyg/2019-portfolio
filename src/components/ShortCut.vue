<template>
  <div class="shortcut_container">
    <img class="shortcut_img" :src="url" />
    <div class="shortcut_name">{{ fileName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.shortcut_container {
  width: 100px;
  padding: 20px;
  text-align: center;
}

.shortcut_container:hover {
  border-radius: 20px;
  cursor: pointer;
  background-color: grey;
}

.shortcut_img {
  width: 80px;
  height: 80px;
}
</style>
