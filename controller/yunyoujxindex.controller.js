/* 入口页面的 controller 文件 */

/* 加载 vant lazyload 组件 */
Vue.use(vant.Lazyload);

const routes = [
  {path: '/', redirect: 'index'},
  {path: '/index', name: 'index', component: indexPage},
  {path: '/positionInfoPage', name: 'positionInfoPage', component: positionInfoPage},
  {path: '/searchPage', name: 'searchPage', component: searchPage},
  {path: '/scenicInfoPage', name: 'scenicInfoPage', component: scenicInfoPage}
]

const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  data() {
    return {
      /* 风景data数组的索引 */
      scenicDataIndex: null,
      /* 风景数组的全部数据 */
      sceninList: scenicData,
      /* 储存 scenicList 长度 */
      scenicListLength: scenicData.length,
      /* 带价格的永久数组 */
      scenicList: [],
      /* 风景数据查询中间数据 */
      middleList: null,
      /* 景点页面 */
      page: 2,
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
    loadingMsg (time, msg) {
      this.$toast.loading({
        message: msg,
        forbidClick: true,
        duration: time
      })
    }
  },
  router
}).$mount('#app')