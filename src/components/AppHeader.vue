<template>
  <header class="app_header">
    <nav>
      <ul class="menu_list">
        <li class="list_item menu">KwonYG&nbsp&nbsp</li>
        <li class="list_item menu">
          <span>메뉴</span>
        </li>
      </ul>
    </nav>
    <aside class="side_display">
      <span class="display_item clock">{{currentTime}}</span>
    </aside>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {
  public currentTime: string = "";

  public refreshTime() {
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
  }

  public mounted() {
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
}

.app_header {
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
</style>