Vue.use(vant.Lazyload);
const routes = [
  {path: '/', redirect: 'positionInfoPage'},
  {path: '/pageOne', name: 'pageOne', component: pageOne},
  {path: '/positionInfoPage', name: 'positionInfoPage', component: positionInfoPage}
]
const router = new VueRouter({
  routes: routes
})

const app = new Vue({
  router
}).$mount('#app')