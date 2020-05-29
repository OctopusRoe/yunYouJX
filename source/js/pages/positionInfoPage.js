/* 地点信息展示页面 */

const positionInfoPage = {
  data(){
    return {
      /* 介绍文字省略的样式 */
      showAllTex: {
        'van-multi-ellipsis--l3': true
      },
      /* 介绍文字省略 按钮的 名称 */
      showTexBtn: '展开',
      /* 收藏的按钮 */
      collectValue: 0,
      /* 介绍文字 */
      textValue: '我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句我是一段测试语句',
      images: [
        '../source/images/nc.jpg',
        '../source/images/nc.jpg',
      ],
    }
  },
  methods: {
    /* 控制景区介绍展开与收起 */
    controlText () {
      this.showAllTex['van-multi-ellipsis--l3'] = !this.showAllTex['van-multi-ellipsis--l3']
      this.showAllTex['van-multi-ellipsis--l3'] === true ? this.showTexBtn = '展开' : this.showTexBtn = '收起'
    },
    /* 转跳到 游玩攻略 页面 */
    playUseful () {
      this.$router.push('playUseful')
    },
    /* 返回上一页面 */
    goBack () {
      this.$router.back()
    }
  },
  components: {
    'img-swipe': imgSwipe,
    'info-title': positionInfoTitle,
    'base-go-back': baseGoBack
  },
  template: `
  <div class="po-in-pa">
    <base-go-back></base-go-back>
    <header>
      <img-swipe :images="images"></img-swipe>
    </header>

    <main class="pip-main-box">
      <div class="pip-main-top">
        <div><img src="../source/images/jingdian/top-bnt.png"/></div>
      </div>

      <div class="po-main-box">
        <info-title></info-title>
        <div class="po-text-box m-t-20">
          <p :class="showAllTex">{{textValue}}</p>
          <div class="po-text-btn-box text--green">
            <p @click="controlText">{{showTexBtn}}</p>
          </div>
        </div>

        <div class="po-title-card">
          <div @click="playUseful()">
            <img src="../source/images/jingdian/strategy.png"/>
            <p class="m-l-5">游玩攻略</p>
          </div>
          <div>
            <img src="../source/images/jingdian/heat.png"/>
            <p class="m-l-5">人流热图</p>
          </div>
        </div>

        <div class="po-scenic-info m-t-10 m-l-10">
          <div></div>
          <strong class="m-l-10">景点介绍</strong>
        </div>
        
        <div class="po-scenic-allinfo m-t-40">
          <div class="m-l-20">
            <span>景点地址</span>
            <div class="van-ellipsis"><p>{{textValue}}</p></div>
          </div>
          <div class="m-l-20">
            <span>开放时间</span>
            <div class="van-ellipsis"><p>{{textValue}}</p></div>
          </div>
          <div class="m-l-20">
            <span>优惠政策</span>
            <div class="van-ellipsis"><p>{{textValue}}</p></div>
          </div>
          <div class="m-l-20">
            <span>交通信息</span>
            <div class="van-ellipsis"><p>{{textValue}}</p></div>
          </div>
          <div class="m-l-20">
            <span>服务设施</span>
          </div>
          <div class="po-scenic-img-box">
            <div v-for="item in 10" class="m-t-20">
              <img src="../source/images/jingdian/hot.png" />
              <p class="m-t-5">1111</p>
            </div>
          </div>
        
        </div>

        <div class="po-comment-info m-l-10">
          <div class="po-comment-info-title">
            <div class="green-line"></div>
            <strong class="m-l-10">大众评价</strong>
          </div>

          <div class="m-t-3 po-comment-box">
            <img src="../source/images/jingdian/pinglun.png" />
            <p class="text--grey--darken">{{0}}条评论></p>
          </div>
        </div>

        <div class="po-comment-info-box">
          <p class="text--grey--darken">暂无热评</p>
        </div>

      </div>

      <div class="po-placeholder-box">
      </div>

      <div class="po-periphery-box">
        <div class="po-periphery-title m-t-10 m-l-10">
          <div></div>
          <strong class="m-l-10">周边景点</strong>
        </div>
        <div class="po-periphery-info-box">
          <p class="text--grey--darken">暂无相关数据</p>
        </div>
      </div>

      <div class="po-bottom-box">
        <p class="text--grey--darken">已经到底部了</p>
      </div>
    </main>
    <van-tabbar class="po-collect-box">
      <div>
        <van-rate v-model="collectValue" :count="1" size="20"></van-rate>
        <p class="m-l-10 text--black">收藏</p>
      </div>
    </van-tabbar>
  </div>
  `
}