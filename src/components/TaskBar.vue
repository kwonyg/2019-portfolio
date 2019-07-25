<template>
  <footer class="taskbar_footer">
    <div class="taskbar_wrap">
      <div class="taskbar_menu" style="font-size: 2em; color: black;">
        <i class="fas fa-draw-polygon"></i>
      </div>
      <div class="taskbar_time">02:44 AM</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: #de6449;
  height: 5%;
  display: flex;
  align-items: center;
  z-index: 9999;
}

.taskbar_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.taskbar_menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%; /* 반응형으로 너비 조절해야함*/
  height: 100%;
  background-color: orange;
  vertical-align: middle;
}

.taskbar_menu:hover {
  cursor: pointer;
  background-color: rgb(207, 135, 0);
}

.taskbar_time {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%; /* 반응형으로 너비 조절해야함*/
  height: 100%;
  background-color: orange;
}
</style>
