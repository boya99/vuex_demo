import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
// 实例化一个vuex
const store = new Vuex.Store({
  //实例化Vuex的构造参数 state mutations actions
  //存储的数据
  state: {
    count: 0, //这是全局的变量可以通过 $store.state.count 获取内容
    name: '张三',
    genger: '男',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  // 修改state 必须通过 mutations内的方法
  //mutations是同步更新数据
  mutations: {
    //修改state的中属性值的方法名是自定义的
    //有2个参数： 最多有2个参数
    //参数1：state 是当前store中的state对象,是固定值
    //参数2：payload 载荷 调用方法的时候可以传递，也可以不传递：传递内容可以是任意内容
    addCount(state, payload, ) {
      // state.count = state.count + 1
      console.log(payload);

      state.count += payload
    },

    setName(state, setName) {
      state.name = setName
    }
  },
  // actions 是异步更新数据
  //场景：从后端获取一个数据，更新到state的name
  actions: {
    //定义方法
    //参数1：contText 相当于this.$store 所以能够调用commit()方法执行mutations中的方法
    getAsyncName(contText, payload) {
      //异步请求
      setTimeout(function () {
        contText.commit('setName', payload)
      }, 0)
    }

  },

  //相当于vue中的计算属性，所以也要在计算属性中填写
  getters: {
    //定制相关过滤计算属性
    // filterList: function (state) {
    //   return state.list.filter(item => item > 5)
    // },

    filterList: state => state.list.filter(item => item > 5),

    token: state => state.user.token,
    name: state => state.setting.name,

  },
  // 用于存放子模块  获取子模块下的state       this.$store.state.子模块.state中的属性名 比较麻烦  所以 借助父级getters  做好映射
  // 调用子模块的 updateToken方法 默认mutations，setting,getters子模块下全局通用
  //要想各个模块不通用，使用namespaced 命名空间
  modules: {
    user: {
      namespaced: true, // 定义命名空间开启，全局不再生效
      state: {
        token: '12345'
      },

      mutations: {
        updateToken(state) {
          state.token = 'heiheihahei'
        }
      }
    },
    setting: {
      state: {
        name: 'module子模块seting'
      }
    },
  }

})
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')