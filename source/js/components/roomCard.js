/* 房间卡片 组件 */

const roomCard = {
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
  template: `
    <div class="room-card-box m-t-20">
      <div class="room-card-box-list" v-for="item in 3">
      
        <div class="room-card-main m-l-20">
          <van-image radius="5" width="40px" height="40px" fit="cover" :src="src" lazy-load />
          <div class="room-card-main-type m-l-10">
            <strong>{{roomType}}</strong>
            <p class="text--grey--darken m-t-5">{{roomSize}}</p>
          </div>
        </div>

        <div class="room-card-phone" @click="$emit('click',$event)">
          <p class="text--grey--darken">电话预定</p>
        </div>
        
      </div>
    </div>
  `
}