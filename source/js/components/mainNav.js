/* 条件选择组件 */

const mainNav = {
  props: ['positionValue', 'scenicValue', 'starValue'],
  data() {
    return {
      /* 地点索引 */
      positionNum: this.positionValue,
      /* 风景索引 */
      scenicNum: this.scenicValue,
      /* 选择索引 */
      sortingNum: 0,
      /* 级别索引 */
      starNum: this.starValue,

      /* 地点数据 */
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
      ],
      /* 风景数据 */
      scenic: [
        { text: '全部景点', value: 0 },
        { text: '自然风光', value: 1 },
        { text: '名胜古迹', value: 2 },
        { text: '公园乐园', value: 3 },
        { text: '展馆展览', value: 4 },
        { text: '温泉泡汤', value: 5 },
        { text: '动植物园', value: 6 },
        { text: '水上项目', value: 7 },
        { text: '赛事演出', value: 8 },
        { text: '休闲娱乐', value: 9 },
        { text: '运动场馆', value: 10 }
      ],
      /* 选择数据 */
      sorting: [
        { text: '推荐排序', value: 0 },
        // { text: '距离优先', value: 1 },
        { text: '价格升序', value: 2 },
        { text: '价格降序', value: 3 },
      ],
      /* 级别数据 */
      star: [
        { text: '星级', value: 0 },
        { text: '5A', value: 1 },
        { text: '4A', value: 2 },
        { text: '3A', value: 3 },
        { text: '2A', value: 4 },
        { text: 'A', value: 5 },
        { text: '乡村5A', value: 6 },
        { text: '乡村4A', value: 7 },
        { text: '乡村3A', value: 8 },
        { text: '乡村2A', value: 9 },
        { text: '乡村A', value: 10 },
      ]
    }
  },
  methods: {
    /* 可以传递父组件参数的方法 */
    takeMainNavValue () {
      const a = this.takeValue()
      this.$emit('click', a)
    },
    /* 设置要传递给父组件的参数 */
    takeValue() {
      let b = []
      b[0] = this.position.filter(item => item.value === this.positionNum)[0]
      b[1] = this.scenic.filter(item => item.value === this.scenicNum)[0]
      b[2] = this.star.filter(item => item.value === this.starNum)[0]
      b[3] = this.sorting.filter(item => item.value === this.sortingNum)[0]
      return b
    },
  },
  watch: {
    scenicValue(newvalue,oldvalue) {
      this.scenicNum = newvalue
    }
  },
  template: `
  <nav class="main-nav" direction="down" @click="takeMainNavValue()">
    <van-dropdown-menu active-color="#4fcaad">
      <van-dropdown-item v-model="positionNum" :options="position" />
      <van-dropdown-item v-model="scenicNum" :options="scenic" />
      <van-dropdown-item v-model="sortingNum" :options="sorting"/>
      <van-dropdown-item v-model="starNum" :options="star"/>
    </van-dropdown-menu>
  </nav>
  `
}