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
  /* 注册组件 */
  components: {
    'base-go-back': baseGoBack
  },
  template: `
    <div class="search-page-box">
      <base-go-back></base-go-back>
      <div class="search-page-main">
        <form action="/">
          <van-search v-model="searchValue" shape="round" autofocus show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
        </form>
      </div>
    </div>
  `
}