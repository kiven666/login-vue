import Vue from 'vue'

const state = {
  orderList:{},
  params:[]
}

const getters = {
  getOrderList : state => state.orderList
}

const mutations = {
  updateOrderList (state,payLoad) {
    state.orderList = payLoad;
  }
}

const actions = {
  fetchOrderList ({commit, state}){
    Vue.http.post('api/getOrderList',state.params)
    .then(res => {
      commit('updateOrderList', res.data.list);
    },err => {
      console.log(err);
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}