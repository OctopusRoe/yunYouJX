/* 搜索页面 */

const searchPage = {
  data() {
    return {
      loading: false,
      finished: false,
      /* 查询参数 */
      searchValue: '',
      /* 景点数组 */
      scenicList: this.getListFromFather(),
      /* 酒店数组 */
      hotelList: this.getListFromFather(),
      /* 查询数组 */
      searchList: [],
      /* 查询临时数组 */
      middleSearchList: [],
      /* 查询数组长度 */
      searchListLength: null,
      /* 显示哪个页面 */
      isScenicPage: this.whatFather(), // 0是景点，1是酒店, 2是入口页面
      /* 如果查不到数据，显示哪张图片 */
      src: '../source/images/noinfo.png',
      srcIndex: './source/images/noinfo.png',
      /* 是否显示景区列表 */
      showScenicList: false,
      /* 是否显示酒店列表 */
      showHotelList: false,
      /* 显示没有数据 */
      noData: false,

    };
  },
  methods: {
    /* 上滑刷新的方法 */
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
        for (let i = 0; i < 6; i++) {
          this.searchList.push(this.searchList.shift());
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.searchList.length >= this.searchListLength) {
          this.finished = true;
        }
      // }, 1000);
    },
    /* 查询的方法 */
    onSearch(val) {
      if (this.isScenicPage === 0) {
        this.searchList = this.search(this.scenicList, this.searchValue)
        this.searchListLength = this.searchList.length
      } else if (this.isScenicPage === 1) {
        this.searchList = this.searchHotel(this.hotelList, this.searchValue)
        this.searchListLength = this.searchList.length
      } else {
        this.searchList = this.search(this.scenicList, this.searchValue)
        this.searchListLength = this.searchList.length
      }
    },
    /* 取消按钮的方法 */
    onCancel() {
      console.log(this.src)
      if(this.isScenicPage === 0) {
        this.$router.push('pageOne')
      } else if(this.isScenicPage === 1) {
        this.$router.push('allHotel')
      } else {
        this.$router.push('index')
      }
    },
    /* 判断父组件是谁 */
    whatFather () {
      console.log(this.$parent)
      if(this.$parent.page === 0) {
        return 0
      }
      else if(this.$parent.page === 1) {
        return 1
      }
      else if(this.$parent.page === 2){
        return 2
      }
    },
    /* 从父组件得到数组 */
    getListFromFather () {
      if (this.$parent.scenicList) return this.$parent.scenicList
      else return this.$parent.hotelList
    },

    /* *************************************************** */

    /* 查询景点的方法 */
    search(searchList,searchData) {
      return JSLINQ(searchList).Where(item => {
        if (item.product_name) {
          if (item.area_name !== null) return item.product_name.indexOf(searchData) > -1 || item.area_name.indexOf(searchData) > -1
        }
      }).ToArray()
    },
     /* 查询酒店的方法 */
     searchHotel(searchList,searchData) {
      return JSLINQ(searchList).Where(item => {
          return item.bus_type ===3 && item.title.indexOf(searchData) > -1 || item.area_names.indexOf(searchData) > -1
      }).ToArray()
    },
    /* 转跳到景点页面 */
    goToScenic(index) {
      this.$parent.scenicDataIndex = index
      this.$parent.list = this.searchList
      this.$router.push('positionInfoPage')
    },
    /* 转跳到酒店页面 */
    goToHotel(index) {
      this.$parent.hotelList = this.searchList
      this.$parent.hotelListIndex = index
      this.$router.push('hotelInfo')
    }
  },
  computed: {
    showNodata () {
      return this.searchValue !== ''
    }
  },
  watch: {
    searchListLength () {
      if (this.isScenicPage === 2) {
        this.src = './source/images/noinfo.png'
      } else {
        this.src = '../source/images/noinfo.png'
      }
      if (this.isScenicPage === 0){
        this.showScenicList = true
      } else if (this.isScenicPage === 2) {
        this.showScenicList = true
      } else {
        this.showHotelList = true
      }
      if (this.searchListLength === 0) {
        this.noData = true
      } else {
        this.noData = false
      }
    }
  },
  /* 注册组件 */
  components: {
    'base-go-back': baseGoBack,
    'hotel-card': hotelCard
  },
  created() {
    
  },
  template: `
    <div class="search-page-box">
    <!-- <base-go-back></base-go-back> -->
      <div class="search-page-main">
        <div class="search-page-main-box">
          <van-search class="search-page-input" v-model="searchValue" shape="round" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" />
        </div>

        <div v-if="showScenicList">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="all-hotel-page-main-card-box m-t-10">
              <hotel-card v-for="(item,index) in searchList" :key="index"
                :title="item.product_name"
                :hf-type="item.region_level"
                :img-path="item.thumbnail_path"
                :area-names="item.area_name"
                @click="goToScenic(index)">
              </hotel-card>
            </div>
          </van-list>
        </div>
        
        <div v-if="showHotelList">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="all-hotel-page-main-card-box m-t-10">
              <hotel-card v-for="(item,index) in searchList" :key="index"
                :title="item.title"
                :hf-type="item.hf_type"
                :img-path="item.cover_img_path"
                :area-names="item.area_names"
                @click="goToHotel(index)">
              </hotel-card>
            </div>
          </van-list>
        </div>

        <div v-show="noData" class="no-data-box">
          <img :src="src" />
          <p class="text--grey m-t-20" style="fontSize:12px">无相关数据</p>
        </div>
      </div>
    </div>
  `
}