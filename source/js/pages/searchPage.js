/* 搜索页面 */

const searchPage = {
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    /*  */
    onSearch(val) {
      return true
    },
    onCancel() {
      return true
    },
  },
  computed: {
    showNodata () {
      return this.searchValue !== ''
    }
  },
  /* 注册组件 */
  components: {
    'base-go-back': baseGoBack
  },
  template: `
    <div class="search-page-box">
    <!-- <base-go-back></base-go-back> -->
      <div class="search-page-main">
        <form action="/">
          <van-search v-model="searchValue" shape="round" autofocus show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
        </form>
        <div v-show="showNodata" class="no-data-box">
          <img src="../source/images/noinfo.png" />
          <p class="text--grey m-t-20" style="fontSize:12px">无相关数据</p>
        </div>
      </div>
    </div>
  `
}