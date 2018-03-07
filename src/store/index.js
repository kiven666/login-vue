import orderList from './module/dataList'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    orderList
  }
})