/* 房间卡片 组件 */

const roomCard = {
  props: ['rooms'],
  data() {
    return {
      /* 房间图片 */
      src: '../source/images/nc.jpg',
      /* 房间类型 */
      roomType: '大床房',
      /* 房间大小 */
      roomSize: '舒适'
    }
  },
  methods: {
    /* 处理照片地址 */
    setSrc () {
      this.rooms.forEach(item => {
        item.src = 'http://www.yyjxcloud.com/' + item.img_icon
      });
    }
  },
  created() {
    // console.log(this.rooms)
    this.setSrc()
  },
  template: `
    <div class="room-card-box m-t-20">
      <div class="room-card-box-list" v-for="(item, index) in rooms" :key="index">
      
        <div class="room-card-main m-l-20">
          <van-image radius="5" width="40px" height="40px" fit="cover" :src="item.src" lazy-load />
          <div class="room-card-main-type m-l-10">
            <strong>{{item.item_title}}</strong>
            <p class="text--grey--darken m-t-5">{{item.item_label}}</p>
          </div>
        </div>

        <div class="room-card-phone" @click="$emit('click',$event)">
          <div class="price-tag">
            <p class="text--red"style="fontSize:17px">￥</p>
            <p class="text--red" style="fontSize:17px;marginTop:3px">{{item.item_price}}</p>
            <p class="text--grey--darken m-l-2" style="fontSize:12px;marginTop:4px">起</p>
          </div>
        </div>
        
      </div>
    </div>
  `
}