/* 入口页面 */

const indexPage = {
  data() {
    return {
      /* 保存风景数组 */
      list: [],
      loading: false,
      finished: false,
      /* 搜索数据 */
      searchValue: null,
      /* 得到带价格的全部风景数据 */
      scenicList: this.takePrice(scenicData).concat(),
      /* 5A级风景数组 */
      topScenicList: JSLINQ(this.takePrice(scenicData)).Where(item => item.region_level === '5A' && item.deleted === 0).ToArray(),
      /* 5A级风景数组长度 */
      topScenicListLength: JSLINQ(this.takePrice(scenicData)).Where(item => item.region_level === '5A' && item.deleted === 0).ToArray().length,
    }
  },
  methods: {
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
        if (this.list.length < this.topScenicListLength) {
          for (let i = 0; i < 3; i++) {
            if(this.topScenicList.length !== 0){
              this.list.push(this.topScenicList.shift())
            }
          }
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= this.topScenicListLength) {
          this.finished = true;
        }
      }, 1000);

    },
    /* 得到价格 */
    takePrice (data) {
      data = JSLINQ(data).Where(item => {
        return item.product_code === "30000001" || item.deal_id !== null 
      }).ToArray()

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
    goTOSearchPage () {
      this.$parent.scenicList = this.scenicList
      this.$router.push('searchPage')
    }
  },
  created() {
  },
  components: {
    'scenic-card': scenicCard,
  },
  template: `
    <div class="index-page-box">
      <header class="index-page-header m-t-10">
        <div class="index-page-header-p-box">
          <!--<p class="m-l-5">云游江西</p>-->
        </div>
        <div class="index-search-box m-t-10" @click="goTOSearchPage">
          <van-search placeholder="请输入搜索关键词" disabled />
        </div>
      </header>
      <mian class="index-page-main-box m-t-40">
        <div class="index-button-box">
          <div><a href="./view/scenic.html"><img src="./source/images/nav-region.png" /><p class="m-t-10">风景门票</p></a></div>
          <div><a href="./view/hotel.html"><img src="./source/images/nav-hotel.png" /><p class="m-t-10">酒店住宿</p></a></div>
        </div>
        <div class="index-grey-box m-t-20"></div>
        <div class="index-list-box">
          <p class="index-list-box-p text--grey--darken">热门景区</p>
          <div>
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
                :price="0"
                @click="goToInfo(index)"
              >
              </scenic-card>
              <!--
              <div v-show="showNodata" class="no-data-box">
                <img src="../source/images/noinfo.png" />
                <p class="text--grey m-t-20" style="fontSize:12px">无相关数据</p>
              </div>
              -->
            </van-list>
          </div>
        </div>
      </mian>
      <footer>
      </footer>
    </div>
  `
}