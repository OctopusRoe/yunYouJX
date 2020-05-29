/* 游玩攻略 页面 */

const playUseful = {
  data() {
    return {
      srcValue: [
        '../source/images/nc.jpg'
      ]
    }
  },
  components: {
    'base-go-back': baseGoBack,
    'base-tag': smallTag
  },
  template: `
    <div class="pu-info-box">
      <base-go-back></base-go-back>
      <header class="">
        <img :src=srcValue />
      </header>
      <div class="pu-placeholder-box"></div>
      <main class="m-l-20">
        <div>
          <strong class="text--black">滕王阁景区</strong>
          <div class="pu-info-tag-box m-t-20">
            <base-tag color="green" title="5A景区"></base-tag>
            <base-tag color="other" title="雄伟壮观"></base-tag>
          </div>
          <div class="m-t-20 text--grey--darken">
            <p>暂无简介</p>
          </div>
        </div>
      </main>
      <div class="pu-bottom-box m-t-20">
        <p class="text--grey--darken">无更多数据</p>
      </div>
    </div>
  `
}