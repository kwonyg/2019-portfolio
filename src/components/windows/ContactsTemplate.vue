<template>
  <div class="contact_wrap">
    <div class="contact_container phone_container">
      <a class="contact_link phone_link" href="tel:010-9217-2117">
        <img class="contact_image phone_image" src="../../assets/phone.svg" alt="전화" />
        <span>010-9217-2117</span>
      </a>
    </div>
    <div class="contact_container email_container">
      <a class="contact_link email_link" href="mailto: abc@example.com">
        <img class="contact_image email_image" src="../../assets/mail.svg" alt="이메일" />
        <span>andamirocll@gmail.com</span>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import bus from "@/utils/bus";
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
  @Prop() public readonly z!: number;

  public clickedWindow() {
    bus.$emit("calc:zindex", this.title);
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}

.contact_wrap {
  padding: 30px;
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