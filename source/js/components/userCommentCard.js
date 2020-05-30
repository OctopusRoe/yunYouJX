/* 用户评论卡片样式 */

const userCommentCard = {
  data() {
    return {
      userName: 'Octopus',
      starValue: 2.5,
      timeValue: '2020-05-01 02:59',
      userContentInfo: '我是一段测试文字我是一段测试文字我是一段测试文字我是一段测试文字我是一段测试文字我是一段测试文字我是一段测试文字我是一段测试文字我是一段测试文字'
    }
  },
  template: `
    <div class="usercom-card-box m-t-20">
      <div class="com-user-info-title">

        <div class="com-user-photo">
          <img src="../source/images/test.jpg" />
        </div>

        <div class="com-user-info">
          <strong>{{userName}}</strong>
          <div class="m-t-5">          
            <van-rate v-model="starValue" readonly size="12" />
            <p class="m-l-10">{{starValue}}分</p>
          </div>
        </div>  

        <div class="com-user-time-box">
          <p class="text--black">{{timeValue}}</p>
        </div>
      </div>

      <div class="com-user-content m-t-10">
        <div>
          <p>{{userContentInfo}}</p>
          <div class="m-t-20">
            <div class="com-user-content-photo-box">
              <img src="../source/images/test.jpg"/>
            </div>
            <div class="com-user-content-photo-box">
              <img src="../source/images/test.jpg"/>
            </div>
            <div class="com-user-content-photo-box">
              <img src="../source/images/test.jpg"/>
            </div>
            <div class="com-user-content-photo-box">
              <img src="../source/images/test.jpg"/>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  `
}