import Vue from 'vue'
import Router from 'vue-router'
import Kechen from '../views/kechen/Index'
import Home from '../Home/Index'
import Index from '../views/index/Index'
import Login from '../views/login/Login'
import Register from '../views/login/Register'
import Notic from '../views/notic/Index'
import Mykechen from '../views/mykecheng/Index'
import Mystudy from '../views/mystudy/Index'
import Study from '../views/study/Index'


Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name:'home',redirect:'/index', component: Home, children:[
      { path:"index",name:'index', component: Index },
      { path:"kechen",name:'kechen', component: Kechen },
      { path:"notic", component: Notic },
      { path:"mykecheng", component: Mykechen},
      { path:"mystudy", component: Mystudy},
    ]},
    { path: '/login', component: Login },
    { path: '/register', component:Register },
    { path: '/study', name:'study', component:Study },

    // { path: '/test',name:'test',redirect:'/test/xxk', component:Test,  children:[
    //   { path: 'xxk', component:Xxk,name:'xxk' },
    //   { path: 'form', component:Form, name:'form' },
    //   { path: 'select', component:Select, name:'select' },
     
    // ]},
  ]
})
