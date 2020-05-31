/* 酒店详情页 头部组件 */

const hotelInfoTitle = {
  data() {
    return {
      /* 酒店名字 */
      hotelName: '北极星北极星北极星北极星',
      /* 酒店标签数组 */
      tagList: ['高端商务', '舒适'],
      /* 酒店地址 */
      position: '银河系 猎户旋臂 太阳系 第三行星 北极',
      /* 酒店电话 */
      phoneNum: '110-110110110'
    }
  },
  template: `
    <div class="hotel-info-title-box">
      <div class="hotel-info-title-name">
        <strong>{{hotelName}}</strong>

        <div class="tag-list-box m-t-20">
          <div class="tag-list m-l-5" v-for="(item,index) in tagList">
            <p class="text--grey--darken">{{item}}</p>
          </div> 
        </div>

        <div class="hotel-info-title-default m-t-10 m-l-5">
          <img src="../source/images/jingdian/location.png" />
          <p class="m-l-10">{{position}}</p>
        </div>

        <div class="hotel-info-title-default m-t-10 m-l-5">
          <img src="../source/images/jingdian/phone.png" />
          <p class="m-l-10">{{phoneNum}}</p>
        </div>
      </div>
      <div class="hotel-info-title-btn-box" @click="$emit('click',$event)">
        <div class="hotel-info-title-btn">
          <p class="text--green">电话预约</p>
        </div>
      </div>
    </div>
  `
}