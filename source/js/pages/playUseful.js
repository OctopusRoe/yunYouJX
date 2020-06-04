/* 游玩攻略 页面 */

const playUseful = {
  data() {
    return {
      srcValue: 'http://www.yyjxcloud.com/' + this.$parent.list[this.$parent.scenicDataIndex].thumbnail_path,
      /* 从父组件接收到的 风景区 对象 */
      positionScenic: this.$parent.list[this.$parent.scenicDataIndex],
      /* levelTag 数据 */
      regionLevel: this.$parent.list[this.$parent.scenicDataIndex].region_level,
      /* tag数据 */
      description: this.$parent.list[this.$parent.scenicDataIndex].description,
      /* 给标签数组赋值 */
      tagList: [],
      /* 是否显示tagList数组 */
      showTagLIst: false,
      /* 是否显示leaveTag */
      showLeaveTag: false,
    }
  },
  methods: {
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
    goback () {
      this.$router.push('positionInfoPage')
    }
  },
  created() {
    this.tagList = this.takeDescription()
    this.showTagLIst = this.showTag()
    this.showLeaveTag = this.showLeave()
  },
  components: {
    'base-go-back': baseGoBack,
    'base-tag': smallTag
  },
  template: `
    <div class="pu-info-box">
    <!-- <base-go-back></base-go-back> -->
      <header class="">
        <img :src=srcValue />
      </header>
      <div class="pu-placeholder-box"></div>
      <main class="m-l-20">
        <div>
          <strong class="text--black">{{positionScenic.product_name}}</strong>
          <div class="pu-info-tag-box m-t-20">
            <base-tag color="green" v-if="showLeaveTag" class="m-r-5" :title="regionLevel"></base-tag>
            <base-tag color="other" v-if="showTagLIst" v-for="(item,index) in tagList" :title='item' :key='index'></base-tag>
          </div>
          <div class="m-t-20 text--grey--darken">
            <p>暂无简介</p>
          </div>
        </div>
      </main>
      <div class="pu-bottom-box m-t-20">
        <p class="text--grey--darken">无更多数据</p>
      </div>
    </div>
  `
}