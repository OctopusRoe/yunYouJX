/* 风景名胜卡片组件 */

const scenicCard = {
  props: ['position'],
  data() {
    return {
      cardInfo:{
        position: null,
      },
      src: '../source/images/nc.jpg'
    }
  },
  methods: {
  },
  /* 注册smallTag组件 */
  components: {
    'base-tag': smallTag,
    'hot-tag': hotTag,
  },
  template:`
  <div class="main-box">
    <div class="card-box" @click="$emit('click',$event)">
      <div>
        <hot-tag></hot-tag>
        <img id="scenic-card-img" :src="src" alt="">
      </div>
      <div class="card-word-box">
        <strong>滕王阁景区</strong>
        <p>人杰地灵</p>
        <div class="tag-box">
          <base-tag title='5A景区' color='green'></base-tag>
          <base-tag title='革命圣地' color='other'></base-tag>
        </div>
        <div class="position-tag">
          <p class="">南昌市</p>
          <p class="m-l-10 text--grey">|</p>
          <p class="m-l-10 text--green">暂无评分</p>
          <p class="m-l-10 text--grey">|</p>
          <div class="pinglun-tag m-l-10">
            <img src="../source/images/jingdian/pinglun.png" alt="">
            <p class="text--grey m-l-2">0</p>
          </div>
        </div>
        <div class="price-tag">
          <p class="text--red">￥</p>
          <p class="text--red">55</p>
          <p class="text--grey--darken m-l-2">起</p>
        </div>
      </div>
    </div>
  </div>
  `
}