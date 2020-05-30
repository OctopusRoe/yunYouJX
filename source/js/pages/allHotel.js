/* 全部酒店展示 页面 */

const allHotel = {
  components: {
    'base-go-back': baseGoBack,
    'search-box': search,
    'hotel-nav': hotelNav
  },
  template: `
    <div class="all-hotel-page-box">
      <base-go-back></base-go-back>
      <search-box></search-box>
      <header>
      <van-sticky><hotel-nav></hotel-nav></van-sticky>
      </header>
      <main>
      
      </main>
    </div>
  `
}