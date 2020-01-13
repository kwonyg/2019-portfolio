<template>
  <div @click="clickedWindow">
    <vue-draggable-resizable
      v-if="show"
      class="modal"
      style="border: 3px solid #C5C5C5;"
      :drag-handle="'.drag-handle'"
      :w="w"
      :h="h"
      :x="x"
      :y="y"
      :z="z"
    >
      <div class="drag-handle status_bar">
        <img
          class="close_img"
          src="../../assets/close.svg"
          alt="닫기 이미지"
          @click="$emit('close', title)"
        />
        <span class="title">{{ title }}</span>
      </div>
      <div class="content_container">
        <slot name="content"></slot>
      </div>
    </vue-draggable-resizable>
  </div>
</template>
<script lang="ts">
import bus from '@/utils/bus';
import { Vue, Component, Prop } from 'vue-property-decorator';
const VueDraggableResizable = require('vue-draggable-resizable');

@Component({
  components: {
    VueDraggableResizable,
  },
})
export default class WindowModal extends Vue {
  @Prop() private readonly title!: string;
  @Prop() private readonly show!: boolean;
  @Prop() private readonly w!: boolean;
  @Prop() private readonly h!: boolean;
  @Prop() private readonly x!: number;
  @Prop() private readonly y!: number;
  @Prop() private readonly z!: number;

  private clickedWindow() {
    bus.$emit('calc:zindex', this.title);
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
  justify-content: space-between;
  background-color: #eaeaea;
  padding: 3px 0;
  width: 100%;
  line-height: 20px;
  border-bottom: 2px solid #c5c5c5;
}

.close_img {
  margin: 0 3px;
  width: 15px;
  height: 15px;
}

.close_img:hover {
  cursor: pointer;
}

.title {
  margin-right: 8px;
}

.content_container {
  height: 100%;
  overflow: hidden;
}
</style>
