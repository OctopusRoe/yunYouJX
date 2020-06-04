/* 酒店详情 页面 */

const hotelInfo = {
  data() {
    return {
      /* 从父组件接到的 酒店 对象 */
      hotel: this.$parent.hotelList[this.$parent.hotelListIndex],
      /* 图片地址数组 */
      images: [],
      /* 房间的数组 */
      roomList: [],
      /* 酒店介绍 */
      textValue: '我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句',
      /* 控制收藏 */
      collectValue: 0,
      /* 用于判断是否取消收藏按钮 */
      controlCollect: false,
    }
  },
  methods: {
    /* 处理照片数组 */
    imagesArray () {
      let a = []
      a[0] = 'http://www.yyjxcloud.com/' + this.hotel.cover_img_path
      return a
    },
    /* 处理酒店房间数组 */
    getRooms () {
      let a
      if (this.hotel.rooms !== null) {a = this.hotel.rooms}
      return a
    },
    /* 收藏的控制按钮 */
    collect () {
      if (this.controlCollect) {
       this.collectValue = 0
       this.$parent.msgShow(500,'取消收藏')
      }else {
        this.collectValue = 1
        this.$parent.msgShow(500,'收藏成功')
      }
      if (this.collectValue === 1) {
        this.controlCollect = true
      } else {
        this.controlCollect = false
      }
    },
  },
  created() {
    window.scrollTo(0, 0)
    this.images = this.imagesArray()
    this.roomList = this.getRooms()
  },
  components: {
    'img-swipe': imgSwipe,
    'base-go-back': baseGoBack,
    'info-title': hotelInfoTitle,
    'room-card': roomCard
  },
  template: `
    <div class="hotel-info-box">
    <!-- <base-go-back></base-go-back> -->
      <header>
        <img-swipe :images="images"></img-swipe>
      </header>

      <main class="hotel-info-mian-box">
        <div class="hotel-info-main-top" @click="getRooms">
          <div><img src="../source/images/jingdian/top-bnt.png"/></div>
        </div>

        <div class="po-main-box">
          <info-title
            :title="hotel.title"
            :description="hotel.description"
            :address="hotel.address"
            :cell-phone="hotel.cell_phone"
          >
          </info-title>
        </div>

        <div class="hotel-info-mian-tag-box m-t-20">
          <div>
            <img src="../source/images/jingdian/gou.png" />
            <p class="text--grey--darken m-l-5">省心舒适</p>
          </div>
          <div class="m-l-10">
            <img src="../source/images/jingdian/gou.png" />
            <p class="text--grey--darken m-l-5">服务品质</p>
          </div>
          <div class="m-l-10">
            <img src="../source/images/jingdian/gou.png" />
            <p class="text--grey--darken m-l-5">入住便捷</p>
          </div>
        </div>

        <div class="hotel-info-mian-room-box">
          <room-card :rooms="roomList"></room-card>
        </div>

        <div class="hotel-info m-t-30 m-l-10">
          <div></div>
          <strong class="m-l-10">酒店介绍</strong>
        </div>

        <div class="hotel-info-text-box m-t-30">
          <p class="text--grey-darken" v-html="hotel.introduce">{{textValue}}</p>
        </div>

        <van-tabbar class="hotel-collect-box">
          <div @click="collect">
            <van-rate v-model="collectValue" :count="1" size="20"></van-rate>
            <p class="m-l-10 text--black">收藏</p>
            <!--
            <div class="hotel-collect-btn"><p>电话预定</p></div>
            -->
          </div>
        </van-tabbar>

      </main>
    </div>
  `
}