/* 全部酒店展示 页面 */

const allHotel = {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,

      /* 永久酒店数组 */
      hotelData: [],
      /* 临时酒店数组 */
      middleHoteLData: [],
      /* 储存酒店数组的长度 */
      hotelDataLength: null,
      /* 搜索参数 */
      searchData: {
        hotelType: null,
        position: null
      }
    }
  },
  methods: {
    /* 得到title组件中的target数据 */
    takeTitleValue(e) {
      console.log(e)
    },
    /* 前往详情页的方法 */
    goToInfo(i) {
      this.$parent.hotelList = this.list
      this.$parent.hotelListIndex = i
      this.$router.push('hotelInfo')
    },
    /* 上滑刷新的方法 */
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 6; i++) {
          this.list.push(this.middleHoteLData.shift());
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.hotelDataLength) {
          this.finished = true;
        }
      }, 1000);
    },
    /* **************************************************** */
    /* 得到酒店数组 */
    setHotelData () {
      let hotels = JSLINQ(hotelData).Where(item => item.bus_type === 3).toArray()
      let hfids = JSLINQ(hotelData).Where(item => item.bus_type === 3).Select(item=>item.hf_id).toArray()
      let hotelRooms = JSLINQ(hotelRoom).Where(item => hfids.indexOf(item.hf_id) > -1).toArray()
      
      hotels.forEach(item => {
        let t = JSLINQ(hotelRooms).Where(x=> x.hf_id === item.hf_id).toArray()
        if (t.length === 0){
          item.rooms = null
        } else {
          item.rooms = t
        }
      });
      return hotels
    },
    /* 查询方法 */
    search(data, filter) {
      if (filter.hotelType !== null) {
        data = JSLINQ(data).Where(item => item.hf_type === filter.hotelType).ToArray()
      }
      if (filter.position !== null) {
        data = JSLINQ(data).Where(item => item.area_names === filter.position).ToArray()
      }
      return data
    },
    /* ************************************************ */
    /* 获取下拉菜单的参数 */
    navBtn(event) {
      let a = []
      if (event[0].value !==0){this.searchData.hotelType = event[0].text}else {this.searchData.hotelType=null;}
      if (event[1].value !==0){this.searchData. position = event[1].text}else {this.searchData. position=null;}
      if (event[0].value !== 0 || event[1].value !== 0){
        a = this.search(this.hotelData, this.searchData)
        this.list = a
        this.hotelDataLength = a.length
      }
    }
  },
  created() {
    window.scrollTo(0, 0)
    this.hotelData = this.setHotelData()
    this.middleHoteLData = this.hotelData.concat()
    this.hotelDataLength = this.hotelData.length
    this.$parent.hotelList = this.hotelData.concat()
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
      <!-- <base-go-back></base-go-back> -->
      <search-box></search-box>
      <header>
      <van-sticky><hotel-nav @click="navBtn($event)"></hotel-nav></van-sticky>
      </header>
      <main>
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="all-hotel-page-main-card-box m-t-10">
              <hotel-card v-for="(item,index) in list" :key="index"
                :title="item.title"
                :hf-type="item.hf_type"
                :img-path="item.cover_img_path"
                :area-names="item.area_names"
                @click="goToInfo(index)">
              </hotel-card>
            </div>
          </van-list>
      </main>
    </div>
  `
}