<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="menu_bar">
            <button class="modal-default-button" @click="$emit('close')">
              <img src="../images/red_dot.png" alt />
            </button>
          </div>
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 105%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 80%; /* 고정 값으로 바꾸기*/
  margin: 0px auto;
  padding: 0 30px 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.menu_bar {
  position: relative;
  height: 25px;
  margin: 0 -30px;
  background-color: orange;
  border-radius: 15px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  max-height: 500px;
  overflow: scroll;
}

.modal-default-button {
  position: absolute;
  top: -5px;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
