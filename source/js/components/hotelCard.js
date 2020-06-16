/* 单个酒店卡片 组件 */

const hotelCard = {
  props: ['title', 'hfType', 'imgPath', 'areaNames'],
  data() {
    return {
      /* 酒店图片地址 */
      src: 'http://www.yyjxcloud.com/' + this.imgPath,
      /* 控制酒店类型是否显示 */
      ifShow: this.showHfType(),
    }
  },
  methods: {
    /* 判断是否显示 hfType 的方法 */
    showHfType() {
      if (this.hfType === '') return false
      else return true
    }
  },
  watch: {
    imgPath(newValue) {
      this.src = 'http://www.yyjxcloud.com/' + newValue
    },
    hfType() {
      this.ifShow = this.showHfType()
    }
  },
  created() {
  },
  template: `
    <div class="hotel-card-box m-t-20" @click="$emit('click',$event)">
      <div class="hotel-card-photo-box">
        <div class="hotel-card-type" v-if="ifShow">
          <p>{{hfType}}</p>
        </div>
        <van-image class="hotel-card-photo" width="10rem" height="9rem" fit="cover" :src="src" radius="15" lazy-load />
      </div>
      <div class="hotel-card-name">
        <strong>{{title}}</strong>
      </div>
      <div class="hotel-card-postiion m-t-5">
        <div><div class="iconfont icon-didian"></div></div>
        <p class="text--grey--darken m-l-5">{{areaNames}}</p>
      </div>
    </div>
  `
}