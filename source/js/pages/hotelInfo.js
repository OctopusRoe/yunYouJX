/* 酒店详情 页面 */

const hotelInfo = {
  data() {
    return {
      /* 图片地址数组 */
      images: [
        '../source/images/nc.jpg',
        '../source/images/nc.jpg',
      ],
      /* 酒店介绍 */
      textValue: '我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句',
      /* 控制收藏 */
      collectValue: 0
    }
  },
  components: {
    'img-swipe': imgSwipe,
    'base-go-back': baseGoBack,
    'info-title': hotelInfoTitle,
    'room-card': roomCard
  },
  template: `
    <div class="hotel-info-box">
      <base-go-back></base-go-back>
      <header>
        <img-swipe :images="images"></img-swipe>
      </header>

      <main class="hotel-info-mian-box">
        <div class="hotel-info-main-top">
          <div><img src="../source/images/jingdian/top-bnt.png"/></div>
        </div>

        <div class="po-main-box">
          <info-title></info-title>
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
          <room-card></room-card>
        </div>

        <div class="hotel-info m-t-30 m-l-10">
          <div></div>
          <strong class="m-l-10">酒店介绍</strong>
        </div>

        <div class="hotel-info-text-box m-t-30">
          <p>{{textValue}}</p>
        </div>

        <van-tabbar class="hotel-collect-box">
          <div>
            <van-rate v-model="collectValue" :count="1" size="20"></van-rate>
            <p class="m-l-10 text--black">收藏</p>
            <div class="hotel-collect-btn"><p>电话预定</p></div>
          </div>
        </van-tabbar>

      </main>
    </div>
  `
}