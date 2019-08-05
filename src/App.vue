<template>
  <div id="app">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: "Noto Sans KR", sans-serif;
  height: 100%;
}
.window {
  height: 100px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.5;
}

@media (max-width: 1199.98px) {
  #app {
    font-size: 16px;
  }
}
</style>
