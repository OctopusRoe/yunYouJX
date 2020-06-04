/* 地点信息展示页面头部组件 */

const positionInfoTitle = {
  props: ['scenicTitle', 'regionLevel', 'description', 'shortInfo', 'productScore'],
  data() {
    return {
      starValue: this.takeScore(),
      /* 景区分数 */
      score: this.takeScore(),
      /* 给标签数组赋值 */
      tagList: this.takeDescription (),
      /* 是否显示tagList数组 */
      showTagLIst: this.showTag(),
      /* 是否显示leaveTag */
      showLeaveTag: this.showLeave(),
      /* 是否显示 shortInfo  */
      showShortInfo: this.showShort()
    }
  },
  methods: {
    /* 前往评论页面 */
    gotoCommentPage() {
      this.$emit('click',event)
    },
    /* 是否显示 shortInfo 的方法 */
    showShort () {
      if (this.shortInfo === '' || this.shortInfo === null) return false
      else return true
    },
    /* 是否显示leaveTag的方法 */
    showLeave () {
      if (this.regionLevel === '') return false
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
        a = this.description.split(',')
        return a
      }
    },
    /* 处理景点分数 */
    takeScore () {
      return parseInt(this.productScore)
    }
  },
  created() {
  },
  components: {
    'base-tag': smallTag,
  },
  template:`
    <div class="position-title-box">
      <div>
        <strong>{{scenicTitle}}</strong>
        <div class="po-tag-box m-t-20">
          <base-tag v-if="showLeaveTag" class="m-r-5" color="green" :title="regionLevel"></base-tag>
          <base-tag v-if="showTagLIst" v-for="(item,index) in tagList" :title='item' :key='index' color="other"></base-tag>
        </div>
        <p class="text--black m-t-20">{{shortInfo}}</p>
      </div>
      <div class="po-star-box">
        <div class="text--green"><p style="fontSize:16px">{{score}}</p><p class="m-l-3">分</p></div>
        <div class="m-t-3">
          <van-rate v-model="starValue" readonly size="10" />
        </div>
        <!--
        <div class="m-t-3 pinlun-box" @click="gotoCommentPage()">
          <img src="../source/images/jingdian/pinglun.png" />
          <p class="text--grey--darken">{{0}}条评论></p>
        </div>
        -->
      </div>
    </div>
  `
}