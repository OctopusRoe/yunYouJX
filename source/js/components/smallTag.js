/* smallTag标签组件 */

const smallTag = {
  props: ['title', 'color'],
  data() {
    return {
      tagColor: {
        'level-tag': true,
        'other-tag': false,
      }
    }
  },
  methods: {
    /* 用于创建时判断tag的颜色 */
    controlColor() {
      const a = {
        'level-tag': true,
        'other-tag': false
      }
      const b = {
        'level-tag': false,
        'other-tag': true
      }
      this.color == 'green'? this.tagColor = a : this.tagColor = b;
    }
  },
  created() {
    this.controlColor()
  },
  template: `
  <div>
    <div :class="tagColor"><p><slot>{{title}}</slot></p></div>
  </div>
  `
}