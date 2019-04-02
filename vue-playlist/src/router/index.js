import Vue from 'vue'
import Router from 'vue-router'
import user from "@/components/user"
import adress from "@/components/adress"
Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/user',
      name:'User',
      component: user

    },
    {
      path:'/adress',
      name:'Adress',
      component: adress

    }
  ],
  mode:"history"
})
