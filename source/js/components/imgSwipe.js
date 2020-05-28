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
          <p class="m-t-5">南昌市/多云</p>
        </div>
        <div class="img-index-box">
          <img src="../source/images/jingdian/img.png"/>
          <p>1/{{images.length}}</p>
        </div>
      </div>
    </div> 
  `
}