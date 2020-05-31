/* 顶部搜索的组件 */

const search = {
  methods: {
    goToSearch () {
      this.$router.push('searchPage')
    }
  },
  template: `
    <div class="title-box" @click="goToSearch()">
      <div class="search-box">
        <img src="../source/images/jingdian/sousuo.png" alt="">
        <p>搜索关键词</p>
      </div>
    </div>
  `
}