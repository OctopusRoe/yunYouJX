/* 用户评论页面 */

const commentPage = {
  methods: {
    /* 跳转到填写评论页面 */
    gotoAddComment() {
      this.$router.push('addComment')
    }
  },
  created() {
    /* 调用父组件中的 加载动画 方法 */
    this.$parent.loadingMsg(500, '加载中...')
    /* 组件创建时，返回顶部 */
    window.scrollTo(0, 0)
  },
  components: {
    'comment-title': commentTitle,
    'user-comment-card': userCommentCard,
    'base-go-back': baseGoBack
  },
  template: `
    <div class="com-pa-box">
      <base-go-back></base-go-back>
      <header>
        <comment-title></comment-title>
      </header>
      <div class="com-pa-palceholdel"></div>
      <main>
        <div>
          <user-comment-card></user-comment-card>
          <user-comment-card></user-comment-card>
          <user-comment-card></user-comment-card>
        </div>
        <van-divider />
        <p style="fontSize:12px;color:#E0E0E0">没有跟多了</p>
      </main>
      <div class="com-add-com-page" @click="gotoAddComment()">
        <img src="../source/images/jingdian/addComplaint.png" />
      </div>
    </div>
  `
}