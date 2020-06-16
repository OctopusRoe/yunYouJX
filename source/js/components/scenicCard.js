/* 风景名胜卡片组件 */

const scenicCard = {
  props: ['title', 'shortInfo', 'levelTag', 'description', 'src', 'areaName', 'productScore', 'evaluateCount', 'hot', 'price'],
  data() {
    return {
      /* 图片地址 */
      patch: 'http://www.yyjxcloud.com/' + this.src,
      /* 给标签数组赋值 */
      tagList: this.takeDescription (),
      /* 是否显示tagList数组 */
      showTagLIst: this.showTag(),
      /* 是否显示leaveTag */
      showLeaveTag: this.showLeave(),
      /* 评分参数 */
      evaluate: 0,
      /* 是否显示热门标签 */
      showHotTag: this.hot === 1,
      /* 是否显示 shortInfo  */
      showShortInfo: this.showShort(),
      /* 保存是否显示价格 */
      showPriceValue: this.showPrice(),
    }
  },
  methods: {
    /* 判断是否显示价格的方法 */
    showPrice () {
      if(this.price === -1 || this.price === 0) return false
      else return true 
    },
    /* 是否显示 shortInfo 的方法 */
    showShort () {
      if (this.shortInfo === '' || this.shortInfo === null) return false
      else return true
    },
    /* 是否显示leaveTag的方法 */
    showLeave () {
      if (this.levelTag === '') return false
      else return true
    },
    /* 是否显示tagList数组的方法 */
    showTag () {
      if (this.description === '') return false
      else return true
      
    },
    /* 处理tag标签的数据 */
    takeDescription () {
      let a = []
      if (this.description === null) {
        return a
      } else {
        a = this.description.split(',')[0]
        return a
      }
    },
    /* 处理评分 */
    takeEvaluateCount () {
      if (this.evaluateCount === null) {
        this.evaluate = 0
      } else {
        this.evaluate = this.evaluateCount
      }
    }
  },
  watch: {
    src (newValue) {
      this.patch = 'http://www.yyjxcloud.com/' + newValue
    },
    levelTag (newValue) {
      this.showLeaveTag = this.showLeave()
    },
    shortInfo () {
      this.showShortInfo = this.showShort()
    },
    price () {
      this.showPriceValue = this.showPrice() 
    }
  },
  /* 注册smallTag组件 */
  components: {
    'base-tag': smallTag,
    'hot-tag': hotTag,
  },
  template:`
  <div class="main-box m-t-10">
    <div class="card-box" @click="$emit('click',$event)">
      <div class="card-box-hot-tag-box">
        <hot-tag class="card-box-hot-tag" v-if="showHotTag"></hot-tag>
        <van-image id="scenic-card-img" round="10" :src="patch" />
      </div>
      <div class="card-word-box">
        <strong>{{title}}</strong>
        <p v-if="showShortInfo" class="m-t-5 show--text">{{shortInfo}}</p>
        <div class="tag-box">
          <base-tag v-if="showLeaveTag" class="m-r-5 m-t-5" :title='levelTag' color='green'></base-tag>
          <!--<base-tag v-if="showTagLIst" class="m-t-5" v-for="(item,index) in tagList" :title='item' :key='index' color='other'></base-tag>-->
          <base-tag v-if="showTagLIst" class="m-t-5" :title='tagList' color='other'></base-tag>
        </div>
        <div class="position-tag m-t-5">
          <p class="">{{areaName}}</p>
          <p class="m-l-10 text--grey">|</p>
          <p class="m-l-10 text--green">{{productScore}} 分</p>
          <!-- 
          <p class="m-l-10 text--grey">|</p>
            <div class="pinglun-tag m-l-10">
              <img src="../source/images/jingdian/pinglun.png" alt="">
              <p class="text--grey m-l-5">{{evaluate}}</p>
            </div>
          -->
        </div>
        <div v-if="showPriceValue" class="price-tag">
          <p class="text--red">￥</p>
          <p class="text--red">{{price}}</p>
          <p class="text--grey--darken m-l-2">起</p>
        </div>
      </div>
    </div>
  </div>
  `
}