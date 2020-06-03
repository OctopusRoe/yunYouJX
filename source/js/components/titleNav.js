/* pageOne 页面 头部的按钮组件 */

const titleNav = {
  data() {
    return {
      titleNavValue: [
        {id: 1, src: '../source/images/icons/zrfg.png', name: '自然风光'},
        {id: 2, src: '../source/images/icons/msgj.png', name: '名胜古迹'},
        {id: 3, src: '../source/images/icons/gyly.png', name: '公园乐园'},
        {id: 4, src: '../source/images/icons/zgzl.png', name: '展馆展览'},
        {id: 5, src: '../source/images/icons/wq.png', name: '温泉泡汤'},
        {id: 6, src: '../source/images/icons/dwy.png', name: '动植物园'},
        {id: 7, src: '../source/images/icons/ssxm.png', name: '水上项目'},
        {id: 8, src: '../source/images/icons/bs.png', name: '赛事演出'},
        {id: 9, src: '../source/images/icons/xxyr.png', name: '休闲娱乐'},
        {id: 10, src: '../source/images/icons/ydcg.png', name: '运动场馆'},
      ],
    }
  },
  methods: {
    takeTitleNavValue (event) {
      this.$emit('click', event)
    }
  },
  template: `
  <div class="nav-box">
    <div name="ziranfengguang" v-for="(item , i) in titleNavValue" :key=i @click="takeTitleNavValue(item.name)">
      <img :src="item.src" alt="">
      <p>{{item.name}}</p>
    </div>
  </div>
  `
}