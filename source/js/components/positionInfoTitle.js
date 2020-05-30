/* 地点信息展示页面头部组件 */

const positionInfoTitle = {
  data() {
    return {
      starValue: 0
    }
  },
  methods: {
    gotoCommentPage() {
      this.$router.push('commentPage')
    }
  },
  components: {
    'base-tag': smallTag,
  },
  template:`
    <div class="position-title-box">
      <div>
        <strong>滕王阁景区</strong>
        <div class="po-tag-box m-t-20">
          <base-tag color="green" title="5A景区"></base-tag>
          <base-tag color="other" title="雄伟壮观"></base-tag>
        </div>
        <p class="text--black m-t-20">人杰地灵</p>
      </div>
      <div class="po-star-box">
        <div class="text--green"><p style="fontSize:16px">0</p><p class="m-l-3">分</p></div>
        <div class="m-t-3">
          <van-rate v-model="starValue" readonly size="10" />
        </div>
        <div class="m-t-3 pinlun-box" @click="gotoCommentPage()">
          <img src="../source/images/jingdian/pinglun.png" />
          <p class="text--grey--darken">{{0}}条评论></p>
        </div>
      </div>
    </div>
  `
}