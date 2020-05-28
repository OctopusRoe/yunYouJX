/* 图片轮播组件 */

const imgSwipe = {
  props: ['images'],
  template: `
    <div class="img-swipe">
      <van-swipe class="img-box" :autoplay="0" :show-indicators="false">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="img-swipe-info-box">
        <div>
          <span>24°</span>
          <p>南昌市/多云</p>
        </div>
        <div></div>
      </div>
    </div> 
  `
}