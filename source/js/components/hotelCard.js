/* 单个酒店卡片 组件 */

const hotelCard = {
  data() {
    return {
      /* 酒店图片地址 */
      src: '../source/images/nc.jpg',
      /* 酒店类型 */
      hotelType: '高端定制',
      /* 控制酒店类型是否显示 */
      ifShow: true,
      /* 酒店名字 */
      hotelName: '北极星北极星北极星北极星北极星北极星',
      /* 城市地点 */
      position: '北极'
    }
  },
  template: `
    <div class="hotel-card-box" @click="$emit('click',$event)">
      <div class="hotel-card-photo-box">
        <div class="hotel-card-type" v-show="ifShow">
          <p>{{hotelType}}</p>
        </div>
        <van-image class="hotel-card-photo" width="10rem" height="9rem" fit="cover" :src="src" radius="15" lazy-load />
      </div>
      <div class="hotel-card-name m-t-5">
        <strong>{{hotelName}}</strong>
      </div>
      <div class="hotel-card-postiion m-t-10">
        <img src="../source/images/jingdian/location.png" />
        <p class="text--grey--darken m-l-5">{{position}}</p>
      </div>
    </div>
  `
}