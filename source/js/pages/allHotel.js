/* 全部酒店展示 页面 */

const allHotel = {
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
    /* 前往详情页的方法 */
    goToInfo() {
      this.$router.push('hotelInfo')
    },
    /* 上滑刷新的方法 */
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 6; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    },
  },
  /* 注册组件 */
  components: {
    'base-go-back': baseGoBack,
    'search-box': search,
    'hotel-nav': hotelNav,
    'hotel-card': hotelCard
  },
  template: `
    <div class="all-hotel-page-box">
      <base-go-back></base-go-back>
      <search-box></search-box>
      <header>
      <van-sticky><hotel-nav></hotel-nav></van-sticky>
      </header>
      <main>
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="all-hotel-page-main-card-box m-t-10">
              <hotel-card v-for="item in list" :key="item" @click="goToInfo()"></hotel-card>
            </div>
          </van-list>
      </main>
    </div>
  `
}