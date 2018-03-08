import Vue from 'vue'
import Router from 'vue-router'

import Index from '../view/index'
import DetailPage from '../view/detail'
import AnalysisPage from '../view/detail/analysis'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path:'/detail',
      component:DetailPage,
      redirect:'/detail/analysis',
      children:[{
        path:'analysis',
        component:AnalysisPage
      }]
    }
  ]
})
