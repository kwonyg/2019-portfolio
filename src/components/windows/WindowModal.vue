<template>
  <div @click="clickedWindow">
    <vue-draggable-resizable
      v-if="show"
      class="modal"
      style="border: 1px solid black;"
      :drag-handle="'.drag-handle'"
      :w="w"
      :h="h"
      :z="z"
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
        <slot name="content"></slot>
      </div>
    </vue-draggable-resizable>
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
  @Prop() public readonly w!: boolean;
  @Prop() public readonly h!: boolean;
  @Prop() public readonly z!: number;

  clickedWindow() {
    bus.$emit("calc:zindex", this.title);
  }
}
</script>
<style scoped>
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
  overflow: scroll;
  overflow-x: hidden;
  height: 93%;
}
</style>