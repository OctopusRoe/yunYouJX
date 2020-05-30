/* 评论头部组件 */

const commentTitle = {
  data() {
    return {
      /* 评分星星数量 */
      startValue: 5,
      /* 评论条数 */
      commentNum: 1,
      /* 评论标签按钮数组 */
      commentTag: [
        {tagValue: '全部', num: 1},
        {tagValue: '有图', num: 1},
        {tagValue: '好评', num: 1},
        {tagValue: '差评', num: 1},
        {tagValue: '认真评', num: 1}
      ],
    }
  },
  methods: {
     /* 控制激活标签的背景色 */
    controlActiveTag(event) {
      const nodelist = event.currentTarget.parentNode.children
      for (let i=0; i<nodelist.length; i++){
        nodelist[i].className = null;
      }
      event.currentTarget.className = 'active-box'
    },

    /* 页面创建的时候激活 全部 标签的背景色 */
    startPageTag() {
      document.querySelector('.comment-tag-box').children[0].className = 'active-box'
    }
  },
  mounted() {
    this.startPageTag()
  },
  template: `
    <div class="com-pa-title">
      
      <div class="com-pa-title-num">
        <div class="com-all-num">
          <strong>5</strong>
          <p style="marginTop:9px">分</p>
        </div>
        <div>
          <van-rate v-model="startValue" readonly size="15" color="#ffd21e"/>
        </div>
        <div class="com-all-num-num text--grey--darken m-t-5">
          <img src="../source/images/jingdian/pinglun.png" />
          <p class="m-l-3">{{commentNum}}评论</p>
        </div>
      </div>

      <div>
        <div class="comment-tag-box">
          <div v-for="(item,index) in commentTag" @click="controlActiveTag($event)" style="marginTop:10px;marginLeft:10px">
            <p>{{item.tagValue}}</p>
            <p class="m-l-3">{{item.num}}</p>
          </div>
        </div>
      </div>
    </div>
  `
}