/* 酒店的 js control 文件 */

/* 加载 vant lazyload 组件 */
Vue.use(vant.Lazyload);

/* 注册 vue-router 地址 */
const routes = [
  {path: '/' ,redirect: 'allHotel'},
  {path: '/allHotel', name: 'allHotel', component: allHotel},
  {path: '/hotelInfo', name: 'hotelInfo', component: hotelInfo},
  {path: '/searchPage', name: 'searchPage', component: searchPage}
]

/* 注册 vue-router 实例 */
const router = new VueRouter({
  routes: routes
})

/* 全局 Vue 实例  */
const app = new Vue({
  data() {
    return {
      /* 保存的索引数组 */
      hotelList: [],
      /* 保存的索引 */
      hotelListIndex: null,
      /* 永久带房间的数组 */
      hotelList: []
    }
  },
  methods: {
    /* 全局提示信息 */
    msgShow (time, msg) {
      this.$toast({
        message: msg,
        duration: time
      })
    },
    /* 全局加载动画的方法 */
    loadingMsg (msg) {
      this.$toast.loading({
        message: msg,
        forbidClick: true,
      })
    }
  },
  router
}).$mount('#app')