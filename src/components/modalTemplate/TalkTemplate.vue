<template>
  <div>
    개발중이에요~ :)
    <ul>
      <li v-for="message in messages" :key="message.id">{{ message.content }}</li>
    </ul>
    <div class="form_content">
      <input type="text" v-model="message" />
      <button @click="onSubmit">전송</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      message: ""
    };
  },

  created() {
    this.$store.dispatch("GET_MESSAGES");
  },

  computed: {
    ...mapGetters({
      messages: "fetchedMessages",
      user: "fetchedUser"
    })
  },

  methods: {
    setNick() {
      this.$store.dispatch("ADD_USER", { nick: this.nick }).then(() => {
        this.message = "";
      });
    },
    onSubmit() {
      if (this.message === "") return alert("메세지를 입력해주세요");
      this.$store
        .dispatch("ADD_MESSAGE", { message: this.message })
        .then(() => {
          this.message = "";
        });
    }
  }
};
</script>

<style scoped></style>
