/* 全部风景名胜展示页面 */

const pageOne = {
  data () {
    return {
      /* 保存风景数组 */
      list: [],
      loading: false,
      finished: false,
      /* 保存下拉菜单的数据 */
      mainNavValue: {
        positionNum: 0,
        scenicNum: 0,
        starNum: 0
      },
      /* 风景的全部地址 */
      sceninList: scenicData,
      /* 储存 风景 数组长度 */
      sceninLength: scenicData.length,
      /* 风景的临时地址数据 */
      middleList: null,

    }
  },
  methods: {
    /* 得到title组件中的target数据 */
    takeTitleValue(e) {
      this.getNewArray(e)
      switch (e) {
        case '自然风光': this.mainNavValue.scenicNum = 1; break;
        case '名胜古迹': this.mainNavValue.scenicNum = 2; break;
        case '公园乐园': this.mainNavValue.scenicNum = 3; break;
        case '展馆展览': this.mainNavValue.scenicNum = 4; break;
        case '温泉泡汤': this.mainNavValue.scenicNum = 5; break;
        case '动植物园': this.mainNavValue.scenicNum = 6; break;
        case '水上项目': this.mainNavValue.scenicNum = 7; break;
        case '赛事演出': this.mainNavValue.scenicNum = 8; break;
        case '休闲娱乐': this.mainNavValue.scenicNum = 9; break;
        case '运动场馆': this.mainNavValue.scenicNum = 10; break;
      }
    },
    /* 前往详情页的方法 */
    goToInfo(i) {
      this.$parent.scenicDataIndex = i
      this.$parent.list = this.list
      this.$router.push('positionInfoPage')
    },
    /* 上滑刷新的方法 */
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求

      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.sceninList.shift())
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= this.sceninLength - 1) {
          this.finished = true;
        }
      }, 1000);

    },

    /* *************************************************************************** */

    /* 景点的查询方法 */
    searchScenic (array, StringValue) {
      return JSLINQ(array).Where(item => {
        if (item.label_names === null) return
        else {return item.label_names === StringValue || item.label_names.indexOf(StringValue) > -1}
      }).ToArray();
    },

    /* 地点的查询方法 */
    searchPosition (array, StringValue) {
      return JSLINQ(array).Where(item => item.area_name === StringValue).ToArray();
    },

    /* 星级的查询方法 */
    searchStar (array, StringValue) {
      return JSLINQ(array).Where(item => item.region_level === StringValue).ToArray();
    },

    /* titleNav 处理 scenicData 数据 */
    getNewArray (StringValue) {
      this.list = []
      this.$parent.controlValue = true
      this.$parent.loadingMsg(500)
      let a = []
      if (!this.$parent.middleList !== null) {a = this.searchScenic(scenicData,StringValue)}
      else {a = this.searchScenic(this.$parent.middleList,StringValue)}
      this.sceninList = a
      // this.$parent.scenicListLength = a.length

    },
    /* 城市条件选择 */
    getCityArray (StringValue) {
      this.list = []
      let a = []
      setTimeout(() => {
        this.list = a = JSLINQ(this.$parent.middleList).Where((item) => {
          return item.area_name === StringValue
        }).ToArray();
      }, 500);
      this.$parent.scenicListLength = this.list.length
      console.log(this.$parent.scenicListLength)
    },
    /* 获取下拉菜单的数据 */
    mainNavBtn (event) {
      const a = event
      if (a[0].value === 0 && a[1].value === 0 && a[2].value === 0)return
      else {
        switch (true) {
          case a[0].value !=0: this.getCityArray(a[0].text); break;
          case a[1].value !=0: this.getNewArray(a[1].text); break;
          case a[2].value !=0: this.getNewArray(a[2].text); break;
        }
      }
      // console.log(event)
    }
  },
  /* 注册组件 */
  components: {
    'search-box': search,
    'title-nav': titleNav,
    'scenic-card': scenicCard,
    'main-nav': mainNav,
    'base-go-back': baseGoBack
  },
  template: `
  <div>
    <base-go-back></base-go-back>
    <search-box></search-box>
    <header class="header-box">
      <title-nav @click="takeTitleValue($event)"></title-nav>
    </header>
    <main>
      <div class="pageone-main-grey-box"></div>
      <van-sticky>
        <main-nav
          :position-value="mainNavValue.positionNum"
          :scenic-value="mainNavValue.scenicNum"
          :star-value="mainNavValue.starNum"
          @click="mainNavBtn($event)
        ">
        </main-nav></van-sticky>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <scenic-card v-for="(item,index) in list" :key="index"
          :title="item['product_name']"
          :short-info="item['short_info']"
          :level-tag="item['region_level']"
          :description="item['description']"
          :src="item['thumbnail_path']"
          :area-name="item['area_name']"
          :product-score="item['product_score']"
          :evaluate-count="item['evaluate_coun']"
          :hot="item['hot']"
          @click="goToInfo(index)"
          >
          </scenic-card>
      </van-list>
    </main>
  </div>
  `
}