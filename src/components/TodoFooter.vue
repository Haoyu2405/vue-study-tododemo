<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余数量:<strong>{{ arr.length }}</strong></span
    >
    <!-- li元素是包含在ul元素内部的，当点击li元素时，会冒泡到ul元素上，触发ul元素的@click事件，从而调用fn方法。
      而在fn方法中，this.isSel是组件的一个data属性，点击li元素时更新了该属性的值，因此可以获取到点击li时的isSel值。 -->
    <ul class="filters" @click="fn">
      <!-- 6.1判断谁应该有高亮的显示 - 动态class
           6.2用户点击要切换isSel里保存的值
      -->
      <li>
        <a
          :class="{ selected: isSel === 'all' }"
          href="javascript:;"
          @click="isSel = 'all'"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'no' }"
          href="javascript:;"
          @click="isSel = 'no'"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel === 'yes' }"
          href="javascript:;"
          @click="isSel = 'yes'"
          >已完成</a
        >
      </li>
    </ul>
    <!-- 7.清除已完成 -->
    <button class="clear-completed" @click="clearFn">清除已完成</button>
  </footer>
</template>

<script>
// 5.数量统计
export default {
  data() {
    return {
      // 6.点谁谁亮
      // 6.0 变量isSel
      isSel: 'all', // all:"全部"，yes:'已完成'，no：‘未完成’
    }
  },
  //  5.1父传子
  props: ['arr'],
  methods: {
    fn() { // 切换筛选条件
      // 6.3 子 -> 父 把类型字符串传给App.vue
      this.$emit('changeType', this.isSel)
    },
    // 7.1 子传父 -> 清除已完成
    // 触发App.vue里clearFn函数
    clearFn(){ 
      this.$emit('clear')
    }
  },
}
</script>
