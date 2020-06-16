/* 风景详情页面 */

const scenicInfoPage = {
  data() {
    return {
      /* 从父组件接收到的 风景区 对象 */
      positionScenic: this.$parent.list[this.$parent.scenicDataIndex],
      /* 其他信息 */
      otherInfo: '请咨询景区',
      /* 锚点数组 */
      array: [{name: '简介', href: '#1'}, {name: '开放时间', href: '#2'}, {name: '优惠政策', href: '#3'}, {name: '交通信息', href: '#4'}, {name: '服务设施', href: '#5'}]
    }
  },
  methods: {
    /* 处理服务设施数据 */
    serviceInfo () {
      let b = []
      if(this.positionScenic.label_service_info !== '' && this.positionScenic.label_service_info !== null){
        console.log(1)
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
    /* 处理其他信息 */
    takeOtherInfo () {
      if (this.positionScenic.other_info === '' || this.positionScenic.other_info === null) {
        this.otherInfo = '请咨询景区'
      } else {
        this.otherInfo = this.positionScenic.other_info
      }
    },
    gobackto () {
      this.$router.push('positionInfoPage')
    }

  },
  created() {
    window.scrollTo(0, 0)
    this.serviceValue = this.serviceInfo()
    this.takeOtherInfo()
  },
  components: {
    'base-go-back': baseGoBack
  },
  template: `
    <div class="scenic-info-page-box">

    <!-- <base-go-back></base-go-back> -->
      <div class="scenic-hash-map-box">
        <van-sticky>
          <div>
            <p class="m-t-30" v-for="(item,index) in array" :key="index"><a :href="item.href">{{item.name}}</a></p>
          </div>
        </van-sticky>
      </div>
      
      <div class="scenic-info-main" id="1">
        <div class="m-t-40">
          <strong>简介</strong>
          <div class="m-t-20 text--black" v-html="positionScenic.product_introduce"></div>
        </div>

        <div class="m-t-20" id="2">
          <strong>开放时间</strong>
          <div class="m-t-20 ">{{positionScenic.business_hours}}</div>
        </div>

        <div class="m-t-20" id="3">
          <strong>优惠政策</strong>
          <div class="m-t-20"><p class="text--grey--darken">{{positionScenic.favoured_policy}}</p></div>
        </div>

        <div class="m-t-20" id="4">
          <strong>交通信息</strong>
          <div class="m-t-20">
            <div class="scenic-info-address-box">
              <p class="text--grey--darken">景点地址</p>
              <p class="text--black m-l-10">请咨询景区</p>
            </div>

            <div class="m-t-20 text--grey--darken">
              <p>{{positionScenic.traffic_detail_info}}</p>
            </div>
          </div>
        </div>

        <div class="m-t-20 scenic-service" id="5">
          <strong>服务设施</strong>
          <div class="scenic-service-box po-scenic-img-box">
            <div v-for="item in serviceValue" class="m-t-20">
              <img :src="item.labelIcon" />
              <p class="m-t-5">{{item.labelName}}</p>
            </div>
          </div>
        </div>

        <div class="m-t-20">
          <strong>其他信息</strong>
          <div class="m-t-20 text--grey--darken">
            <p>{{otherInfo}}</p>
          </div>
        </div>

      </div>

      <div class="text--grey m-t-20"><p>已经到底了</p></div>
    </div>
  `
}
