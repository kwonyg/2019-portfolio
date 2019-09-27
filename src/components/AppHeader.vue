<template>
  <header class="app_header">
    <nav>
      <ul class="menu_list">
        <li class="list_item menu">KwonYG&nbsp&nbsp</li>
        <li class="list_item menu" @click="toggleMenu">
          <span>메뉴</span>
        </li>
      </ul>
    </nav>
    <aside class="side_display">
      <span class="display_item clock">
        <span class="current_date">{{currentDate}}</span>
        <span class="current_time">{{currentTime}}</span>
      </span>
    </aside>
    <div class="sub_menu" v-if="showMenu">
      <ul class="sub_menu_list">
        <li class="list_item sub_menu_item">
          <span>도움말</span>
        </li>
        <li class="list_item sub_menu_item">
          <span>개발 환경</span>
        </li>
        <li class="list_item sub_menu_item">
          <span>로그아웃</span>
        </li>
      </ul>
    </div>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import bus from '@/utils/bus';

@Component
export default class AppHeader extends Vue {
  public currentDate: string = '';
  public currentTime: string = '';
  public showMenu: boolean = false;

  public toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  public refreshDate() {
    const date = new Date();
    const month = date.getMonth();
    const clockDate = date.getDate();

    this.currentDate = `${month + 1}월 ${clockDate}일 `;
  }

  public refreshTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    this.currentTime = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  public closeMenu() {
    this.showMenu = false;
  }

  public created() {
    bus.$on('close:sub_menu', this.closeMenu);
  }

  public beforeDestroy() {
    bus.$off('close:sub_menu', this.closeMenu);
  }

  public mounted() {
    setInterval(this.refreshDate, 1000);
    setInterval(this.refreshTime, 1000);
  }
}
</script>

<style scoped>
header {
  background-color: #ecfbfe;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

header.app_header {
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
}

nav .menu_list {
  display: flex;
}

nav .menu_list .list_item {
  margin-left: 5px;
}

nav .menu_list .list_item span {
  cursor: pointer;
}

aside .display_item {
  padding: 0 6px;
  border-left: 1px solid black;
}

.sub_menu {
  position: absolute;
  width: 180px;
  top: 21px;
  left: 85px;
  background: #fafeff;
  z-index: 9999;
}

ul.sub_menu_list {
  border: 1px solid #000;
}

ul.sub_menu_list .list_item {
  padding-left: 20px;
}

.sub_menu_item:hover {
  cursor: pointer;
  color: #fff;
  background-color: #2488ff;
}

@media (max-width: 575px) {
  .current_date {
    display: none;
  }
}
</style>