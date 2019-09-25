<template>
  <vue-draggable-resizable
    v-if="show"
    class="modal"
    :w="300"
    :h="450"
    style="border: 1px solid black;"
    :drag-handle="'.drag-handle'"
  >
    <div class="drag-handle status_bar">
      <img class="close_img" src="../assets/close.svg" alt />
      <div>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
    <div>conetent</div>
  </vue-draggable-resizable>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VueDraggableResizable from "vue-draggable-resizable";

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
  z-index: 200 !important;
}

.status_bar {
  background-color: #ecfbfe;
}

.close_img {
  margin-left: 3px;
  width: 15px;
  height: 15px;
}

.close_img:hover {
  cursor: pointer;
}

i {
  display: block;
  width: 100%;
  height: 1px;
  background: #000;
}
</style>