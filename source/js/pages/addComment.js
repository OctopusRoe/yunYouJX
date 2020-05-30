/* 用户填写评论页面 */

const addComment = {
  data() {
    return {
      /* 景区服务 分数 */
      serverValue: 5,
      /* 游玩体验 分数 */
      playValue: 5,
      /* 预定便捷 分数 */
      reservationValue: 5,
      /* 性价比 分数 */
      priceValue: 5,
      /* 输入框提示消息 */
      placeHolder: '亲，这次旅行满意吗？发布图文点评吧',
      /* 用户输入的评论 */
      commentMessage: null,
      fileList: []
    }
  },
  components: {
    'base-go-back': baseGoBack
  },
  template: `
    <div class="addcomment-box">
      <base-go-back></base-go-back>
      <header>

        <div class="addcomment-info-box">
          <p class="text--grey--darken">景区服务</p>
          <div>
            <van-rate v-model="serverValue" size="25" gutter="15" color="#01beff" />
          </div>
          <strong class="m-t-5">{{serverValue}}</strong>
        </div>

        <div class="addcomment-info-box">
          <p class="text--grey--darken">游玩体验</p>
          <div>
            <van-rate v-model="playValue" size="25" gutter="15" color="#01beff" />
          </div>
          <strong class="m-t-5">{{playValue}}</strong>
        </div>

        <div class="addcomment-info-box">
          <p class="text--grey--darken">预定便捷</p>
          <div>
            <van-rate v-model="reservationValue" size="25" gutter="15" color="#01beff" />
          </div>
          <strong class="m-t-5">{{reservationValue}}</strong>
        </div>

        <div class="addcomment-info-box">
        <p class="text--grey--darken">性价比</p>
          <div>
            <van-rate v-model="priceValue" size="25" gutter="15" color="#01beff" />
          </div>
          <strong class="m-t-5">{{priceValue}}</strong>
        </div>

      </header>

      <main class="m-t-20">

        <div class="addcomment-main-box">
          
          <van-field v-model="commentMessage" :border="false" autosize type="textarea" :placeholder="placeHolder" class="m-t-10"/>
          
          <div class="addcomment-input-photo">
            <van-uploader v-model="fileList" multiple :max-count="9" />
          </div>

        </div>

        <div>
          <van-button color="#01beff" class="addcomment-button">发布</van-button>
        </div>
      </main>
    </div>
  `
}