/* 酒店的 js control 文件 */

/* 加载 vant lazyload 组件 */
Vue.use(vant.Lazyload);

/* 注册 vue-router 地址 */
const routes = [
  {path: '/' ,redirect: 'allHotel'},
  {path: '/allHotel', name: 'allHotel', component: allHotel}
]

/* 注册 vue-router 实例 */
const router = new VueRouter({
  routes: routes
})

/* 全局 Vue 实例  */
const app = new Vue({
  methods: {

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