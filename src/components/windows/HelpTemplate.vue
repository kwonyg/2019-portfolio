<template>
  <div class="help_wrap">
    <ul class="help_list">
      <li class="list_item">
        <div class="tip">
          <img class="help_img" src="@/assets/folder.svg" alt />
          <br />
          <div class="description">
            아이콘을 '더블 클릭'하셔야 창이 열립니다.
          </div>
        </div>
      </li>
      <li class="list_item">
        <div class="tip">
          <img
            class="help_img"
            src="@/assets/smartphone.svg"
            alt="디바이스 사진"
          />
          <br />
          <div class="description">
            창 크기는 사이트에 들어왔을 때 기준으로 사용자 디바이스에 알맞게
            고정값으로 설정됩니다.
          </div>
        </div>
      </li>
      <li class="list_item">
        <div class="tip">
          <img class="help_img" src="@/assets/zoom.svg" alt="돋보기 사진" />
          <br />
          <div class="description">
            사이트에 들어오고 나서 화면을 이리저리 바꿔봐도 처음 창크기 그대로
            유지가 되니 유념해주세요.
          </div>
        </div>
      </li>
      <li class="list_item">
        <div class="tip">
          <img class="help_img" src="@/assets/chat.svg" alt="말풍선 사진" />
          <br />
          <div class="description">
            방문해주셔서 너무 감사합니다. :D
            <br />방문 기념으로 방명록을 작성해주시면 좋겠습니다.
          </div>
        </div>
      </li>
    </ul>
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
  @Prop() private readonly z!: number;

  private clickedWindow() {
    bus.$emit('calc:zindex', this.title);
  }
}
</script>
<style scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  margin-bottom: 30px;
}
a {
  text-decoration: none;
}

.help_wrap {
  padding: 30px;
}

.help_img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
.tip {
  text-align: center;
}

.description {
  text-align: left;
}
</style>
