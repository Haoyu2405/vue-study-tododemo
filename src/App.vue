<template>
  <div class="todoapp">
    <TodoHeader></TodoHeader>
    <TodoMain></TodoMain>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
// 1.目标:创建工程 - 准备相关组件文件 - 标签+样式（静态）
// 1.0 样式引入
import './styles/base.css'
import './styles/index.css'
// 1.1 组件引入
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  data() {
    return {}
  },
  methods: {},
  // 1.2组件注册
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
}
</script>
<style scoped></style>
