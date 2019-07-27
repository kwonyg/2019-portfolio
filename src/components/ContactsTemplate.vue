<template>
  <section class="contact_section">
    <h1 class="section_title">Contacts</h1>
    <div class="contact_content">
      <div class="phone content_item">
        <img
          class="contact_img"
          src="../images/contacts/phone.png"
          alt="휴대폰 아이콘"
        />
        <a class="contact_link" href="tel:010-9217-2117">010-9217-2117</a>
      </div>
      <div class="email content_item">
        <img
          class="contact_img"
          src="../images/contacts/email.png"
          alt="이메일 아이콘"
        />
        <a class="contact_link" href="tel:010-9217-2117"
          >andamirocll@gmail.com</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}

.contact_section {
  margin: 0 auto;
}

.contact_content {
  /* 반응형 사이즈 필요 */
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
  font-size: 1em;
}

.content_item {
  margin-bottom: 20px;
}

.contact_img {
  /* 반응형 사이즈 필요 */
  width: 3em;
  height: 3em;
  margin-right: 20px;
}

.phone,
.email {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
