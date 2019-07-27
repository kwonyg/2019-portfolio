<template>
  <section class="activity_section">
    <h1>Activities</h1>
    <ul class="acitivity_list">
      <li>
        <article>
          <div class="activity_info_container">
            <h2>활동 명</h2>
            <p class="description">
              봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.
            </p>
            <div class="date">2019.03.03</div>
          </div>
        </article>
      </li>
      <li>
        <article>
          <div class="activity_wrap">
            <div class="activity_img_container" v-if>
              <img
                class="activity_img"
                src="../images/projects/ironmental_1.png"
                alt
              />
            </div>
            <div class="activity_info_container">
              <h2>활동 명</h2>
              <p class="description">
                봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.
              </p>
              <div class="date">2019.03.03</div>
            </div>
          </div>
        </article>
      </li>
      <li>
        <article>
          <div class="activity_wrap">
            <div class="activity_img_container" v-if>
              <img
                class="activity_img"
                src="../images/projects/ironmental_1.png"
                alt
              />
            </div>
            <div class="activity_info_container">
              <h2>활동 명</h2>
              <p class="description">
                봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.봉사활동했습니다.
              </p>
              <div class="date">2019.03.03</div>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  margin-top: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 auto;
  max-width: 600px;
  color: #ffffff;
  background-color: #ff9340;
  margin-bottom: 100px;
  border-radius: 20px;

  -webkit-box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 7px 29px -12px rgba(0, 0, 0, 0.75);
}

.activity_img_container {
  margin: 0 auto;
  width: 100%;
}

.activity_img {
  /* border-radius: 20px; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 2px solid #fff;
  max-width: 100%;
  height: auto;
}

.activity_info_container {
  padding: 20px;
}
</style>
