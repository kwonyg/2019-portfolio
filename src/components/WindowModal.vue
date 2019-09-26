<template>
  <vue-draggable-resizable
    v-if="show"
    class="modal"
    style="border: 1px solid black;"
    :drag-handle="'.drag-handle'"
    :w="300"
    :h="450"
    :z="999"
  >
    <div class="drag-handle status_bar">
      <img class="close_img" src="../assets/close.svg" alt />
      <span>Acitivies</span>
    </div>
    <div class="content_container">
      <img src="../assets/close.svg" alt />
      <p>fmeklafmealkfmela</p>
      <p>fmeklafmealkfmela</p>
      <p>fmeklafmealkfmela</p>
      <p>fmeklafmealkfmela</p>
      <p>fmeklafmealkfmela</p>
      <p>fmeklafmealkfmela</p>
      <p>fmeklafmealkfmela</p>
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
  @Prop() readonly show!: boolean;
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