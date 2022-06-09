<template>
  <div>
    <button @click="countAdd">+1(原始形式调用)</button>
    <button @click="addCount(100)">+1(mapMutations辅助函数形式调用)</button>
    <h2>用户姓名:{{ $store.state.name }}</h2>

    <button @click="saveName">异步修改用户姓名（原始形式调用）</button>
    <button @click="getAsyncName('是小王八吧')">
      异步修改用户姓名（mapActions辅助函数形式调用）
    </button>
    <hr />
    <h1>store 中的getters使用</h1>
    <h3>原始形式使用getters:{{ $store.getters.filterList }}</h3>
    <h3>mapGetters使用getters:{{ filterList }}</h3>
  </div>
</template>

<script>
//从vuex中导入 mapMutations
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Child_A',
  //mapGetters属于计算属性，所以放到computed中
  computed: {
    ...mapGetters(['filterList'])
  },
  methods: {
    //原始调用 mutations中的方法，使用this.$store.commit()
    countAdd () {
      //$store 调用commit() 方法， 固定写法，:含义。通过commit() 告知$store 需要更改值
      //commit(mutation名称)
      // this.$store.commit('addCount')
      // commit(mutation名称,参数)
      console.log(this.$event);
      this.$store.commit('addCount', 100)
    },

    //原始调用 actions 中的方法，使用this.$store.dispatch()
    saveName () {
      this.$store.dispatch('getAsyncName', '自定义参数隔壁家的老王');
    },
    ...mapMutations(['addCount']),
    ...mapActions(['getAsyncName'])
  },

}
</script>

<style>
</style>