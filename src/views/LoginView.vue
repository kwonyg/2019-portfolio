<template>
  <section class="login_section">
    <div class="login_info">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Albert_Einstein_%28Nobel%29.png/100px-Albert_Einstein_%28Nobel%29.png"
        class="my_photo"
        alt="avatar"
      />
      <h1 class="section_title my_name">권 영 근</h1>
      <router-link class="login_btn" to="/home" tag="button"
        >로그인</router-link
      >
    </div>
  </section>
</template>

<style scoped>
.login_section:before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  display: block;
  background-image: url("../assets/camping.jpg");
  background-position: bottom;
  background-size: cover;

  height: 100%;

  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

.login_section {
  height: 100%;
  /* left: 0;
  right: 0;
  z-index: 0; */
}

.login_info {
  position: fixed;
  width: 300px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -200px;
  text-align: center;
}

.my_name {
  color: white;
}

.my_photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.login_btn {
  cursor: pointer;
  border: 3px solid black;
  width: 80%;
  height: 50px;
  background-color: Transparent;
}
</style>
