/* 返回组件 */

const baseGoBack = {
  methods: {
    /* 返回上一页的方法 */
    goBack () {
      this.$emit('click', event)
    }
  },
  template: `
  <div class="go-back" @click="goBack()">
    <img src="../source/images/jingdian/back.png" />
  </div>
  `
}