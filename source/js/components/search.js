/* 顶部搜索的组件 */

const search = {
  methods: {
    goBack () {
      this.$router.back()
    }
  },
  template: `
    <div class="title-box">
      <div class="search-box">
        <img src="../source/images/jingdian/sousuo.png" alt="">
        <p>搜索关键词</p>
      </div>
    </div>
  `
}