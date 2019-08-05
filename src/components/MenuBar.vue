<template>
  <div class="menu_bar_mask">
    <div class="menu_bar_wrap">
      <div class="menu_bar_container">
        <ul class="menu_lust">
          <li class="list_item" v-for="menu in menus" :key="menu.name">
            <router-link class="item_link" :to="menu.url">
              <img class="menu_image" :src="menu.image" />
              {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "로그아웃",
          image: require(`@/images/menubar/logout.png`),
          url: "/login"
        },
        {
          name: "도움말",
          image: require(`@/images/menubar/help.png`),
          url: "/"
        }
      ]
    };
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu_bar_container {
  display: table-cell;
  background-color: #d09e88;
  opacity: 0.95;
  width: 300px;
  height: 400px;
  box-shadow: 10px 1px 10px -6px rgba(0, 0, 0, 0.3);
}

.list_item {
  padding: 8px 0;
}

.list_item:hover {
  background-color: grey;
}

.menu_image {
  width: 50px;
  height: 50px;
  margin: 0 10px;
  vertical-align: middle;
}

.item_link {
  display: block;
  width: 100%;
  height: 100%;
  color: black;
  text-decoration: none;
}
</style>
