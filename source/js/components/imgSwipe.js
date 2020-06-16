/* 图片轮播组件 */

const imgSwipe = {
  props: ['images', 'temperature', 'weather'],
  data() {
    return {
    }
  },
  template: `
    <div class="img-swipe">
      <van-swipe class="img-box" :autoplay="0" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="img-swipe-info-box">
        <div>
          <span>{{temperature}}</span>
          <p class="m-t-5">{{weather}}</p>
        </div>
        <div class="img-index-box">
          <div class="iconfont icon-image"></div>
          <p>1/{{images.length}}</p>
        </div>
      </div>
    </div> 
  `
}