<template>
  <div id="app">
    <router-view />
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

@media (max-width: 1199.98px) {
  #app {
    font-size: 16px;
  }
}
</style>
