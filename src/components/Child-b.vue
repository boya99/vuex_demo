<template>
  <div class="main">
    <hr />
    <!-- 获取子模块用户的token和应用名称 -->
    <!-- $store.state.子模块.属性 -->
    <h3>state中user模块下的token = {{ $store.state.user.token }}</h3>
    <h3>state中 setting 模块下的name = {{ $store.state.setting.name }}</h3>
    <hr />
    <h3>使用mapGetters映射子模块快速获取token = {{ token }}</h3>
    <h3>使用mapGetters映射子模块快速获取name = {{ name }}</h3>

    <button type="button" @click="updateToken">
      传统方式更新子模块的token
    </button>
    <button type="button" @click="updateTokenTest">
      映射子模块方式更新子模块的token
    </button>
  </div>
</template>

<script>
// import { mapGetters, mapMutations, createNamespacedHelpers } from 'vuex'
import { mapGetters, mapMutations } from 'vuex'
// const { mapMutations } = createNamespacedHelpers('user')
//使用 createNamespacedHelpers 助手函数进行 进行命名空间的子模块的使用
export default {
  name: 'ChildB',
  computed: {
    ...mapGetters(['token', 'name'])
  },
  methods: {
    // ...mapMutations_u(['updateToken']),
    updateToken () {
      // 调用子模块的 updateToken方法 默认mutations，setting,getters子模块下全局通用
      //要想各个模块不通用，使用namespaced 命名空间 namespaced:true
      // this.$store.commit('updateToken')//调用全局的方法 updateToken
      this.$store.commit('user/updateToken')//模块开启 namespaced:true 后需要添加模块路径
    },
    ...mapMutations(['user/updateToken']), //如何调用呢？
    updateTokenTest () {
      //定义一个 方法来接收 析构的方法
      this['user/updateToken']();

    }
  }
}
</script>

<style>
</style>