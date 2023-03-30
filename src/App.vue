<template>
  <div class="todoapp">
    <TodoHeader @taskEnter="addFn" :arr="list"></TodoHeader>
    <TodoMain :arr="showArr" @del="deleteFn"></TodoMain>
    <TodoFooter
      :arr="showArr"
      @changeType="typeFn"
      @clear="clearFn"
    ></TodoFooter>
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
    return {
      // 2.铺设待办任务
      // 2.0 准备数据
      // 8.1 取出缓存里的数据
      list: JSON.parse(localStorage.getItem('todoList')) || [],
      // 6.4中转接收类型字符串  // 默认显示全部
      getStr: 'all',
    }
  },
  methods: {
    // 添加任务
    addFn(task) {
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1
      //  3.3push到数组里
      this.list.push({
        id: id,
        name: task,
        isDone: false,
      })
    },
    // 删除任务
    deleteFn(id) {
      // 根据id找到该id的对象在该数组里的索引
      let index = this.list.findIndex((obj) => obj.id === id)
      this.list.splice(index, 1)
    },
    // 切换类型字符串
    typeFn(str) {
      // str - 'all' 'yes' 'no'
      this.getStr = str
    },
    // 清除已完成
    clearFn() {
      this.list = this.list.filter((obj) => obj.isDone === false)
    },
  },
  computed: {
    // 6.5定义showArr，通过list数组配合条件筛选而来
    showArr() {
      if (this.getStr === 'yes') {
        // 显示已完成
        return this.list.filter((obj) => obj.isDone === true)
      } else if (this.getStr === 'no') {
        // 显示未完成
        return this.list.filter((obj) => obj.isDone === false)
      } else {
        // 显示全部
        return this.list
      }
    },
  },
  // 1.2组件注册
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  // 8.数据缓存，监听数据list是否发生变化
  watch: {
    list: {
      deep: true,
      handler() {
        // 8.0 存入localStorage
        localStorage.setItem('todoList', JSON.stringify(this.list))
      },
    },
  },
}
</script>
<style scoped></style>
