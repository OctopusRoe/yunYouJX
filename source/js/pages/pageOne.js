/* 全部风景名胜展示页面 */

var pageOne = {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
    }
  },
  methods: {
    /* 得到title组件中的target数据 */
    takeTitleValue(e) {
      console.log(e)
    },
    /* 上滑刷新的方法 */
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  /* 注册组件 */
  components: {
    'search-box': search,
    'title-nav': titleNav,
    'scenic-card': scenicCard,
    'main-nav': mainNav
  },
  template: `
  <div>
    <header class="header-box">
      <search-box></search-box>
      <title-nav @click="takeTitleValue($event)"></title-nav>
    </header>
    <main>
      <div class="pageone-main-grey-box"></div>
      <van-sticky><main-nav></main-nav></van-sticky>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <scenic-card v-for="item in list" :key="item" :title="item"></scenic-card>
      </van-list>
    </main>
  </div>
  `
}