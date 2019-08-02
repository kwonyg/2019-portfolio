<template>
  <footer class="taskbar_footer">
    <div class="taskbar_wrap">
      <div
        class="taskbar_menu"
        style="font-size: 2em; color: black;"
        @click="toggleMenu"
      >
        <i class="fas fa-draw-polygon"></i>
      </div>
      <menu-bar class="menu_bar" v-if="showMenu"></menu-bar>
      <div class="taskbar_time">{{ currentTime }}</div>
    </div>
  </footer>
</template>

<script>
import { setInterval } from "timers";

import MenuBar from "../components/MenuBar.vue";

export default {
  components: {
    MenuBar
  },

  data() {
    return {
      currentTime: "",
      showMenu: false
    };
  },

  methods: {
    refreshTime() {
      const date = new Date();

      const month = date.getMonth();
      const clockDate = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      this.currentTime =
        `${month + 1}월 ${clockDate}일 ` +
        `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },

  mounted() {
    setInterval(this.refreshTime, 1000);
  }
};
</script>

<style scoped>
footer {
  background-color: #eaeaea;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 9999;
}

.taskbar_wrap {
  position: relative;
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
  background-color: #bdbfbf;
  vertical-align: middle;
}

.taskbar_menu:hover {
  cursor: pointer;
  background-color: #bdbfbf;
}

.menu_bar {
  position: absolute;
  top: -400px;
}

.taskbar_time {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 5%; /* 반응형으로 너비 조절해야함*/
  height: 100%;
  background-color: #bdbfbf;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .taskbar_menu {
    width: 20%;
  }

  .taskbar_time {
    width: 20%;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .taskbar_menu {
    width: 20%;
  }

  .taskbar_time {
    width: 20%;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .taskbar_menu {
    width: 20%;
  }

  .taskbar_time {
    width: 20%;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .taskbar_menu {
    width: 20%;
  }

  .taskbar_time {
    width: 20%;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
