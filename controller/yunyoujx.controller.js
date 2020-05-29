/* 景区的 js control 文件 */

/* 加载 vant lazyload 组件 */
Vue.use(vant.Lazyload);

/* 注册 vue-router 地址 */
const routes = [
  {path: '/', redirect: 'pageOne'},
  {path: '/pageOne', name: 'pageOne', component: pageOne, children: []},
  {path: '/positionInfoPage', name: 'positionInfoPage', component: positionInfoPage},
  {path: '/playUseful', name: 'playUseful', component: playUseful}

]

/* 注册 vue-router 实例 */
const router = new VueRouter({
  routes: routes
})

/* 全局 Vue 实例  */
const app = new Vue({
  router
}).$mount('#app')