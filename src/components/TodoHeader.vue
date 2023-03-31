<template>
  <header class="header">
    <h1>todos</h1>
    <!-- 9.全选状态 -->
    <!-- 9.1 v-model关联全选状态 -->
    <!-- 页面变化(勾选true，未勾选false -> v-model -> isAll变量) -->
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- 3.0 键盘事件 - 回车按键 
         3.1 输入框获取值 - v-model
         autofocus - 输入框内输入光标自动闪烁
         方法1 - v-model.trim 去首尾空格 
    -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="downFn"
      v-model.trim="task"
    />
  </header>
</template>

<script>
// 3.目标 - 新增任务
export default {
  data() {
    return {
      task: '',
    }
  },
  methods: {
    downFn() {
      // 3.2当前任务添加到list数组里
      // 子传父
      this.$emit('taskEnter', this.task)
      this.task = ''
    },
  },
  // 计算属性
  computed: {
    isAll: {
      set(checked) {
        // 9.3 用户点击和小选框绑定
        this.arr.forEach((obj) => {
          obj.isDone = checked
        })
      },
      get() {
        // 9.4 小选框和全选绑定，
        // every方法->遇到有不符合条件的直接返回false，否则返回true
        return (
          this.arr.length !== 0 && this.arr.every((obj) => obj.isDone === true)
        )
      },
    },
    // 方法2 - 计算属性去空格
    // trimmedTask: {
    //   set(value) {
    //     this.task = value.trim()
    //   },
    //   get() {
    //     return this.task.trim()
    //   },
    // },
  },
  // 9.2 父->子,子arr接收父list的数据
  props: ['arr'],
}
</script>
