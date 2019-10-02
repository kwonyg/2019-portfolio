<template>
  <transition name="fade">
    <section class="login_section">
      <div class="login_container">
        <div class="status_bar">
          <span class="title">Login</span>
        </div>
        <div class="section_title_container">
          <h1 class="section_title">로그인</h1>
        </div>
        <div class="info_container">
          <img
            class="my_image"
            src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
          />
          <div>권 영 근</div>
        </div>
        <router-link tag="button" class="login_button" to="/home">로그인</router-link>
      </div>
    </section>
  </transition>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class LoginView extends Vue {}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

h1.section_title {
  margin-left: 20px;
}

.login_container {
  position: absolute;
  width: 50%;
  border: 3px solid #c5c5c5;
  background-color: #eaeaea;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.section_title_container {
  text-align: left;
}

.status_bar {
  background-color: #eaeaea;
  padding: 3px 0;
  text-align: right;
  width: 100%;
  line-height: 20px;
  border-bottom: 2px solid #c5c5c5;
}

.status_bar .title {
  margin: 10px;
}

.info_container {
  text-align: center;
  margin-bottom: 20px;
}

.my_image {
  border: 1px solid #000;
  width: 130px;
  height: 130px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
}

.login_button {
  font-family: "DungGeunMo", monospace;
  width: 200px;
  height: 30px;
  margin-bottom: 20px;
  outline: 1px solid #000000;
  background: #c0c0c0;
  border-width: 1px;
}

@media (max-width: 575px) {
  .login_container {
    width: 90%;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>