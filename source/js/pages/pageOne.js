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
        starNum: 0,

      },
      /* 门票价格 */
      priceData: priceData.concat(),
      /* 风景的全部地址 */
      scenicList: scenicData.concat(),
      /* 储存 风景 数组长度 */
      scenicLength: scenicData.concat().length,
      /* 查询数据对象 */
      searchData: {
        position: null,
        scenic: null,
        star: null,
        orderType: 1,
      },

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
        if (this.list.length < this.scenicLength) {
          for (let i = 0; i < 5; i++) {
            if(this.scenicLength.length !== 0){
              this.list.push(this.scenicList.shift())
            }
          }
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= this.scenicLength) {
          this.finished = true;
        }
      }, 1000);

    },

    /* *************************************************************************** */
    /* 多条件搜索 */
    search (data,filter){
      if (filter.position != null) {
        data = JSLINQ(data).Where(item => item.area_name === filter.position).ToArray();
      }
      if (filter.scenic != null) {
        data= JSLINQ(data).Where(item => {
          if (item.label_names === null) return
          else {return item.label_names.indexOf(filter.scenic) > -1}
        }).ToArray();
      }
      if (filter.star != null) {
        data = JSLINQ(data).Where(item => item.region_level === filter.star).ToArray();
      }
      // console.log("data",data);
      data = JSLINQ(data).Where(item => item.deleted == 0).ToArray();

      var pids = JSLINQ(data).Select(x=>x.product_id).items;
      // console.log("pid",pids);
      var pdata = JSLINQ(priceData).Where(x=> x.parent_id ==="root" && pids.indexOf(x.product_id) > -1).Select(x=>{
        return {"productId":x.product_id,"price":x.price};
      }).items;
      // console.log("pdata",pdata);
      var pdataQuery=JSLINQ(pdata);
      data.forEach(item => {
        var t = pdataQuery.Where(x=> x.productId === item.product_id).FirstOrDefault();
        if (t == null) {
          item.price=-1;
        }else{
          item.price=t.price;
        }
      });
      // console.log("data",data);
      switch (filter.orderType) {
        case 1:
          break;
        case 2:
          data=JSLINQ(data).OrderBy(x=>x.price).ToArray();
          break;
        case 3:
          data=JSLINQ(data).OrderByDescending(x=>x.price).ToArray();
          break;
      }
      // console.log(data)
      return data;
    },
    /* 得到价格 */
    takePrice (data) {
      var pids = JSLINQ(data).Select(x=>x.product_id).items;
      // console.log("pid",pids);
      var pdata = JSLINQ(priceData).Where(x=> x.parent_id ==="root" && pids.indexOf(x.product_id) > -1).Select(x=>{
        return {"productId":x.product_id,"price":x.price};
      }).items;
      // console.log("pdata",pdata);
      var pdataQuery=JSLINQ(pdata);
      data.forEach(item => {
        var t = pdataQuery.Where(x=> x.productId === item.product_id).FirstOrDefault();
        if (t == null) {
          item.price=-1;
        }else{
          item.price=t.price;
        }
      });
      return data;
    },
    /* titleNav 处理 scenicData 数据 */
    getNewArray (StringValue) {
      this.$parent.loadingMsg(500)
      let a = []
      this.searchData.scenic = StringValue
      // console.log(this.search(scenicData, this.searchData))
      a = this.search(scenicData, this.searchData)
      this.list = a
      this.scenicLength = a.length

    },
    /* 获取下拉菜单的数据 */
    mainNavBtn (event) {
      let a = []
      if (event[0].value !== 0){this.searchData.position = event[0].text}else {this.searchData.position=null;}
      if (event[1].value !== 0){this.searchData.scenic = event[1].text}else {this.searchData.scenic=null;}
      if (event[2].value !== 0){this.searchData.star = event[2].text}else {this.searchData.star=null;}
      if (event[3].value !== 0){this.searchData.orderType = event[3].value}else {this.searchData.orderType=0;}

      if (event[0].value !== 0 || event[1].value !== 0 || event[2].value !== 0 || event[3].value !== null){
        a = this.search(scenicData, this.searchData)
        this.list = a
        this.scenicLength = a.length
        // console.log(this.searchData);
      }
      
    }
  },
  computed: {
    showNodata () {
      return this.scenicLength === 0
    }
  },
  created() {
    this.$parent.scenicList = this.takePrice(scenicData).concat()
    // console.log(this.takePrice (scenicData))
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
  <div style="width:100%">
  <!-- <base-go-back></base-go-back> -->
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
          :price="item['price']"
          @click="goToInfo(index)"
          >
          </scenic-card>
          <div v-show="showNodata" class="no-data-box">
            <img src="../source/images/noinfo.png" />
            <p class="text--grey m-t-20" style="fontSize:12px">无相关数据</p>
          </div>
      </van-list>
    </main>
  </div>
  `
}