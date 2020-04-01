<template>
  <section class="error_section">
    <div class="error_container">
      <div class="status_bar">
        <span class="title">404 Error</span>
      </div>
      <div class="section_title_container">
        <h1 class="section_title">404 Error</h1>
      </div>
      <div class="info_container">
        <div>We couldn't find this page :(</div>
      </div>
      <router-link tag="button" class="goto_login_button" to="/login">Go to login</router-link>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class LoginView extends Vue {}
</script>

<style scoped>
h1.section_title {
  text-align: center;
}

.error_container {
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

.goto_login_button {
  font-family: 'DungGeunMo', monospace;
  width: 200px;
  height: 30px;
  margin-bottom: 20px;
  outline: 1px solid #000000;
  background: #c0c0c0;
  border-width: 1px;
}

@media (max-width: 575px) {
  .error_container {
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
