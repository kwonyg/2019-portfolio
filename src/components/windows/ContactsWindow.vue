<template>
  <vue-draggable-resizable
    v-if="show"
    class="modal"
    style="border: 1px solid black;"
    :drag-handle="'.drag-handle'"
    :w="370"
    :h="200"
    :z="999"
  >
    <div class="drag-handle status_bar">
      <img
        class="close_img"
        src="../../assets/close.svg"
        alt="닫기 이미지"
        @click="$emit('close',title)"
      />
      <span>{{title}}</span>
    </div>
    <div class="content_container">
      <div class="contact_container phone_container">
        <a class="contact_link phone_link" href="tel:010-9217-2117">
          <img class="contact_image phone_image" src="../../assets/phone.svg" alt="전화" />
          <span>010-9217-2117</span>
        </a>
      </div>
      <div class="contact_container email_container">
        <a class="contact_link email_link" href="mailto: abc@example.com">
          <img class="contact_image email_image" src="../../assets/mail.svg" alt="이메일" />
          <span>andamirocll@email.com</span>
        </a>
      </div>
    </div>
  </vue-draggable-resizable>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
const VueDraggableResizable = require("vue-draggable-resizable");

@Component({
  components: {
    VueDraggableResizable
  }
})
export default class WindowModal extends Vue {
  @Prop() public readonly title!: string;
  @Prop() public readonly show!: boolean;
}
</script>
<style scoped>
a {
  text-decoration: none;
}
.modal {
  background-color: #fff;
  -webkit-box-shadow: 9px 9px 5px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 9px 9px 5px 0px rgba(0, 0, 0, 0.42);
  box-shadow: 9px 9px 5px 0px rgba(0, 0, 0, 0.42);
}

.status_bar {
  display: flex;
  align-items: center;
  background-color: #ecfbfe;
  padding: 3px 0;
  width: 100%;
  line-height: 20px;
}

.close_img {
  margin: 0 3px;
  width: 15px;
  height: 15px;
}

.close_img:hover {
  cursor: pointer;
}

.content_container {
  padding: 30px;
  overflow: hidden;
  height: 93%;
}

.contact_link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.contact_image {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
</style>