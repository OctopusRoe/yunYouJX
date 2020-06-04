/* 景区的 js control 文件 */

/* 加载 vant lazyload 组件 */
Vue.use(vant.Lazyload);

/* 注册 vue-router 地址 */
const routes = [
  {path: '/', redirect: 'pageOne'},
  {path: '/pageOne', name: 'pageOne', component: pageOne},
  {path: '/positionInfoPage', name: 'positionInfoPage', component: positionInfoPage},
  {path: '/playUseful', name: 'playUseful', component: playUseful},
  {path: '/commentPage', name: 'commentPage', component: commentPage},
  {path: '/addComment', name: 'addComment', component: addComment},
  {path: '/searchPage', name: 'searchPage', component: searchPage},
  {path: '/scenicInfoPage', name: 'scenicInfoPage', component: scenicInfoPage}
]

/* 注册 vue-router 实例 */
const router = new VueRouter({
  routes: routes
})

/* 全局 Vue 实例  */
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