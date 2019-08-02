<template>
  <div class="talk_container">
    개발중이에요~ :)
    <ul class="talk_list" style="height:400px; overflow-y: auto;">
      <li v-for="message in messages" :key="message.id">
        {{ message.content }}
      </li>
    </ul>
    <div class="form_container">
      <input type="text" v-model="message" v-on:keyup.enter="onSubmit" />
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
      this.$store
        .dispatch("ADD_MESSAGE", { message: this.message })
        .then(() => {
          var talkList = this.$el.querySelector(".talk_list");
          talkList.scrollTop = talkList.scrollHeight;
        });
      this.message = "";
    }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 500px;
}
li {
  margin: 0;
  padding: 0;
}

.talk_list {
  overflow: scroll;
}

.form_container {
  width: 100%;
}
</style>
