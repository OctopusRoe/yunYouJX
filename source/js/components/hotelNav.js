/* 酒店类型选择 组件 */

const hotelNav ={
  data() {
    return {

      hotelTypeNum: 0,
      positionNum: 0,
      hotelType: [
        { text: '所有类型', value: 0 },
        { text: '五星级', value: 1 },
        { text: '四星级', value: 2 },
        { text: '经济连锁', value: 3 },
        { text: '高端商务', value: 4 },
        { text: '情侣主体', value: 5 },
        { text: '特价优惠', value: 6 }
      ],
      position: [
        { text: '全江西', value: 0 },
        { text: '南昌市', value: 1 },
        { text: '上饶市', value: 2 },
        { text: '赣州市', value: 3 },
        { text: '九江市', value: 4 },
        { text: '抚州市', value: 5 },
        { text: '吉安市', value: 6 },
        { text: '萍乡市', value: 7 },
        { text: '宜春市', value: 8 },
        { text: '景德镇市', value: 9 },
        { text: '鹰潭市', value: 10 },
        { text: '新余市', value: 11 },
      ]
    }
  },
  template: `
  <nav class="main-nav" direction="down">
    <van-dropdown-menu active-color="#4fcaad">
      <van-dropdown-item v-model="hotelTypeNum" :options="hotelType"/>
      <van-dropdown-item v-model="positionNum" :options="position"/>
    </van-dropdown-menu>
  </nav>
  `
}