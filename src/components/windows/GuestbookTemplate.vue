<template>
  <section class="guestbook_wrap">
    <div class="form_container">
      <form @submit.prevent>
        <label for="name">Name</label>
        <br />
        <input v-model="name" type="text" class="name_input" id="name" autocomplete="off" />
        <br />
        <label for="message">Message</label>
        <textarea
          v-model="content"
          :maxlength="maxCharCount"
          class="message_textarea"
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></textarea>
        <div class="post_container">
          <button class="submit_button" :disabled="disablePost" @click="postMessage">Post</button>
          <span class="char_count">{{charCount}}/{{maxCharCount}}</span>
        </div>
      </form>
    </div>
    <div class="message_list_container">
      <ul class="message_list">
        <li class="list_item message" v-for="message in messages" :key="message.id">
          <div class="message_info">
            <span class="user_name">{{message.userName}}</span>
            <span class="create_date">{{ calcDate(message.createDate.toDate())}}</span>
          </div>
          <div class="message_content">
            <p>{{message.content}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script lang="ts">
import { mapGetters } from 'vuex';
import { Vue, Component, Watch } from 'vue-property-decorator';

@Component({
  computed: {
    ...mapGetters({
      messages: 'getMessages',
    }),
  },
})
export default class AboutmeTemplate extends Vue {
  public charCount: number = 0;
  public maxCharCount: number = 140;
  public disablePost: boolean = true;

  public name: string = '';
  public content: string = '';

  @Watch('content')
  public countChars() {
    this.charCount = this.content.length;
  }

  @Watch('name')
  @Watch('content')
  public isFilled() {
    const nameIsFilled: boolean = this.name !== '';
    const contentIsFilled: boolean = this.content !== '';

    this.disablePost = !(nameIsFilled && contentIsFilled);
    // return this.name !== "" && this.name !== "";// 안되는 이유: https://mariusschulz.com/blog/the-and-and-or-operators-in-javascript
  }

  public created() {
    this.$store.dispatch('FETCT_MESSAGES');
  }

  public clearData() {
    this.name = '';
    this.content = '';
  }

  public postMessage() {
    this.$store
      .dispatch('POST_MESSAGE', {
        userName: this.name,
        content: this.content,
      })
      .then(() => {
        this.clearData();
      });
  }

  public calcDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const clockDate = date.getDate();

    return `${year}년 ${month + 1}월 ${clockDate}일 `;
  }
}
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.guestbook_wrap {
  overflow: hidden;
  height: 93%;
}

.form_container {
  border-bottom: 1px solid #000;
  padding: 10px;
}

form .name_input {
  margin-bottom: 10px;
  outline: 0px;
}

textarea.message_textarea {
  width: 100%;
  height: 84px;
  resize: none;
  outline: 0px;
  box-sizing: border-box;
}

.post_container {
  display: flex;
  justify-content: space-between;
}

.submit_button {
  border: 1px solid #000;
  border-radius: 2px;
  padding: 0 10px !important;
  background: none;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.char_count {
  text-align: right;
}

.message_list_container {
  overflow: scroll;
  height: calc(100% - 160px);
}

ul.message_list li.list_item {
  padding: 10px;
  border-bottom: 1px solid #000;
}

.message_info {
  display: flex;
  justify-content: space-between;
}
</style>