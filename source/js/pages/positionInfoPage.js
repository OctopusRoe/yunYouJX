/* 地点信息展示页面 */

const positionInfoPage = {
  data(){
    return {
      images: [
        '../source/images/nc.jpg',
        '../source/images/nc.jpg',
      ],
    }
  },
  components: {
    'img-swipe': imgSwipe,
  },
  template: `
  <div class="po-in-pa">
    <header>
      <img-swipe :images="images"></img-swipe>
    </header>
    <main class="pip-main-box">
      <div class="pip-main-top">
        <div></div>
      </div>
      <div class="position-title">
      </div>
    </main>
  </div>
  `
}