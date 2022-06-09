<template>
  <div id="app">
    <!-- 原始形式使用 -->
    <h3>原始形式获取state状态中count的值：{{ $store.state.count }}</h3>
    <h3>计算形式获取state状态中count的值：{{ count }}</h3>
    <h3>原始形式获取state状态中count的值：{{ $store.state.count }}</h3>
    <h3>计算形式获取state状态中count的值：{{ count }}</h3>
    <h3>计算形式获取state状态中name的值：{{ name }}</h3>
    <h3>计算形式获取state状态中genger的值：{{ genger }}</h3>
    <Child_A></Child_A>
    <child-b-vue></child-b-vue>
  </div>
</template>

<script>
// mapState 是vuex中的的状态管理助手函数
import { mapState } from 'vuex'
import Child_A from './components/Child-a.vue'
import ChildBVue from './components/Child-b.vue'
export default {
  name: 'App',
  components: {
    Child_A,
    ChildBVue,
  },
  computed: {
    // count () {
    //   //来源 vuex
    //   return this.$store.state.count
    // }

    // 使用助手函数 es6语法 解构数组
    ...mapState(['count', 'name', 'genger'])
  }

}
</script>

<style>
</style>
