/* 地点信息展示页面 */

const positionInfoPage = {
  data(){
    return {
      /* 介绍文字省略的样式 */
      showAllTex: {
        'van-multi-ellipsis--l3': true,
        'po-text-box-value': true
      },
      /* 从父组件接收到的 风景区 对象 */
      positionScenic: this.$parent.list[this.$parent.scenicDataIndex],
      /* 介绍文字省略 按钮的 名称 */
      showTexBtn: '展开',
      /* 收藏的按钮显示 */
      collectValue: 0,
      /* 用于判断是否取消收藏按钮 */
      controlCollect: false,
      /* 图片地址数组 */
      images: [],
      /* 服务设施数组 */
      serviceValue: [],
      /* 温度 */
      temperature: '',
      /* 天气 */
      weather: ''
    }
  },
  methods: {
    /* 得到照片数组 */
    imagesArray () {
      let a = []
      a[0] = 'http://www.yyjxcloud.com/' + this.positionScenic.thumbnail_path
      return a
    },
    /* 控制景区介绍展开与收起 */
    controlText () {
      this.showAllTex['van-multi-ellipsis--l3'] = !this.showAllTex['van-multi-ellipsis--l3']
      this.showAllTex['po-text-box-value'] = !this.showAllTex['po-text-box-value']
      this.showAllTex['van-multi-ellipsis--l3'] === true ? this.showTexBtn = '展开' : this.showTexBtn = '收起'
    },
    /* 转跳到 游玩攻略 页面 */
    playUseful () {
      this.$router.push('playUseful')
    },
    /* 转跳到详情页面 */
    gotoInfoPage() {
      this.$router.push('scenicInfoPage')
    },
    /* 返回上一页面 */
    goBack () {
      this.$router.back()
    },
    /* 转跳到 评论 页面 */
    gotoCommentPage () {
      this.$parent.msgShow(500,'正在开发中')
      // this.$router.push('commentPage')
    },
    /* 处理服务设施数据 */
    serviceInfo () {
      let b = []
      if(this.positionScenic.label_service_info !== '' && this.positionScenic.label_service_info !== null){
        const a = JSON.parse(this.positionScenic.label_service_info)
        a.forEach(item => {
        const c = {}
        c.labelName = item.labelName
        c.labelIcon = 'http://www.yyjxcloud.com/' + item.labelIcon
        b.push(c)
      })
      }
      return b
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
    goback() {
      this.$router.push('pageOne')
    },
    /* 开发中 */
    develop () {
      this.$parent.msgShow(1000,'正在开发中')
    }
  },
  watch: {
  },
  created() {
    window.scrollTo(0, 0)
    // this.positionScenic = this.$parent.list[this.$parent.scenicDataIndex]
    this.serviceValue = this.serviceInfo()
    this.images = this.imagesArray()
  },
  components: {
    'img-swipe': imgSwipe,
    'info-title': positionInfoTitle,
    'base-go-back': baseGoBack
  },
  template: `
  <div class="po-in-pa">
  <!-- <base-go-back></base-go-back> -->
    <header>
      <img-swipe :images="images" :temperature="temperature" :weather="weather"></img-swipe>
    </header>

    <main class="pip-main-box">
      <div class="pip-main-top">
        <div><img src="../source/images/jingdian/top-bnt.png"/></div>
      </div>

      <div class="po-main-box">
        <info-title
          :scenic-title = "positionScenic.product_name"
          :region-level = "positionScenic.region_level"
          :description = "positionScenic.description"
          :short-info = "positionScenic.short_info"
          :product-score = "positionScenic.product_score"
          @click="gotoCommentPage"
        ></info-title>
        <div class="po-text-box m-t-20">
          <div :class="showAllTex" v-html="positionScenic.product_introduce" class="text--black" style="fontFamily:Microsoft YaHei;"></div>
          <div class="po-text-btn-box text--green">
            <p @click="controlText">{{showTexBtn}}</p>
          </div>
        </div>

        <div class="po-title-card">
          <!--
          <div @click="playUseful()">
            <img src="../source/images/jingdian/strategy.png"/>
            <p class="m-l-5">游玩攻略</p>
          </div>
          -->
          <!--
            <div @click="develop">
              <img src="../source/images/jingdian/heat.png"/>
              <p class="m-l-5">人流热图</p>
            </div>
          -->
        </div>

        <div class="po-scenic-info m-t-10 m-l-10">
          <div></div>
          <strong class="m-l-10">景点介绍</strong>
        </div>
        
        <div class="po-scenic-allinfo m-t-20" @click="gotoInfoPage()">
          <div class="m-l-20">
            <span>景点地址</span>
            <div class="show--text m-l-5"><p>请咨询景区</p></div>
          </div>
          <div class="m-l-20">
            <span>开放时间</span>
            <div class="show--text m-l-5"><p>{{positionScenic.business_hours}}</p></div>
          </div>
          <div class="m-l-20">
            <span>优惠政策</span>
            <div class="show--text m-l-5"><p>{{positionScenic.favoured_policy}}</p></div>
          </div>
          <div class="m-l-20">
            <span>交通信息</span>
            <div class="show--text m-l-5"><p>{{positionScenic.traffic_detail_info}}</p></div>
          </div>
          <div class="m-l-20">
            <span>服务设施</span>
          </div>
          <div class="po-scenic-img-box">
            <div v-for="item in serviceValue" class="m-t-20">
              <img :src="item.labelIcon" />
              <p class="m-t-5">{{item.labelName}}</p>
            </div>
          </div>
        
        </div>
        
        <!--
        <div class="po-comment-info m-l-10">
          <div class="po-comment-info-title">
            <div class="green-line"></div>
            <strong class="m-l-10">大众评价</strong>
          </div>

          <div class="m-t-3 po-comment-box" @click="gotoCommentPage()">
            <img src="../source/images/jingdian/pinglun.png" />
            <p class="text--grey--darken">{{0}}条评论></p>
          </div>
        </div>

        <div class="po-comment-info-box">
          <p class="text--grey--darken">暂无热评</p>
        </div>
        -->

      </div>

      
      <!--
      <div class="po-placeholder-box">
      </div>
      <div class="po-periphery-box">
        <div class="po-periphery-title m-t-10 m-l-10">
          <div></div>
          <strong class="m-l-10">周边景点</strong>
        </div>
        <div class="po-periphery-info-box">
          <p class="text--grey--darken">暂无相关数据</p>
        </div>
      </div>
      -->
      <div class="po-bottom-box">
        <p class="text--grey--darken"></p>
      </div>
    </main>
    <van-tabbar class="po-collect-box">
      <div @click="collect">
        <van-rate v-model="collectValue" :count="1" size="20"></van-rate>
        <p class="m-l-10 text--black">收藏</p>
      </div>
    </van-tabbar>
  </div>
  `
}