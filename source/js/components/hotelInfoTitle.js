/* 酒店详情页 头部组件 */

const hotelInfoTitle = {
  props: ['title', 'description', 'address', 'cellPhone'],
  data() {
    return {
      /* 酒店标签数组 */
      tagList: this.takeTag(),
      /* 显示 tag */
      showTagList: this.showTag(),
    }
  },
  methods: {
    /* 得到tag 数组 */
    takeTag () {
      let a = []
      if (this.description === '' || this.description === null) return a
      else return this.description.split(',')
    },
    /* 是否显示 tag */
    showTag () {
      if (this.description === '' || this.description === null) return false
      else return true
    }
  },
  template: `
    <div class="hotel-info-title-box">
      <div class="hotel-info-title-name">
        <strong>{{title}}</strong>

        <div class="tag-list-box m-t-20">
          <div v-if="showTagList" class="tag-list m-l-5" v-for="(item,index) in tagList" :key="index">
            <p class="text--grey--darken">{{item}}</p>
          </div> 
        </div>

        <div class="hotel-info-title-default m-t-10 m-l-5">
          <img src="../source/images/jingdian/location.png" />
          <p class="m-l-10">{{address}}</p>
        </div>

        <div class="hotel-info-title-default m-t-10 m-l-5">
          <img src="../source/images/jingdian/phone.png" />
          <p class="m-l-10">{{cellPhone}}</p>
        </div>
      </div>
      <!--
      <div class="hotel-info-title-btn-box" @click="$emit('click',$event)">
        <div class="hotel-info-title-btn">
          <p class="text--green">电话预约</p>
        </div>
      </div>
      -->
    </div>
  `
}