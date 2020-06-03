/* 风景名胜卡片组件 */

const scenicCard = {
  props: ['title', 'shortInfo', 'levelTag', 'description', 'src', 'areaName', 'productScore', 'evaluateCount', 'hot'],
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
    }
  },
  methods: {
    /* 是否显示leaveTag的方法 */
    showLeave () {
      if (this.shortInfo === '') {
        return false
      } else {
        return true
      }
    },
    /* 是否显示tagList数组的方法 */
    showTag () {
      if (this.description === '') {
        return false
      } else {
        return true
      }
    },
    /* 处理tag标签的数据 */
    takeDescription () {
      let a = []
      if (this.description === null) {
        return a
      } else {
        a = this.description.split(',')
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
    },
    created () {
      // this.takeDescription();
      this.takeEvaluateCount();
      console.log(1)
    },
  },
  watch: {
    
  },
  /* 注册smallTag组件 */
  components: {
    'base-tag': smallTag,
    'hot-tag': hotTag,
  },
  template:`
  <div class="main-box m-t-10">
    <div class="card-box" @click="$emit('click',$event)">
      <div>
        <hot-tag v-show="showHotTag"></hot-tag>
        <img id="scenic-card-img" :src="patch" alt="">
      </div>
      <div class="card-word-box">
        <strong>{{title}}</strong>
        <p class="m-t-5">{{shortInfo}}</p>
        <div class="tag-box">
          <base-tag v-show="showLeaveTag" class="m-r-5 m-t-5" :title='levelTag' color='green'></base-tag>
          <base-tag v-show="showTagLIst" class="m-t-5" v-for="(item,index) in tagList" :title='item' :key='index' color='other'></base-tag>
        </div>
        <div class="position-tag m-t-5">
          <p class="">{{areaName}}</p>
          <p class="m-l-10 text--grey">|</p>
          <p class="m-l-10 text--green">{{productScore}} 分</p>
          <p class="m-l-10 text--grey">|</p>
          <div class="pinglun-tag m-l-10">
            <img src="../source/images/jingdian/pinglun.png" alt="">
            <p class="text--grey m-l-5">{{evaluate}}</p>
          </div>
        </div>
        <!--
        <div class="price-tag">
          <p class="text--red">￥</p>
          <p class="text--red">55</p>
          <p class="text--grey--darken m-l-2">起</p>
        </div>
        -->
      </div>
    </div>
  </div>
  `
}