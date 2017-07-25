import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import sayHello from '@/page/helloword'
import childrenComponent from '@/page/childrenComponent'
import children2 from '@/page/children2'
import selfEvent from '@/page/selfEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/sayHello',
      component: sayHello,
      children:[
        {path:'/',redirect:'childrenComponent'},
        {path:'childrenComponent',component:childrenComponent},
        {path:'children2',component:children2},
      ]
    },
    {
      path: '/selfEvent',
      component: selfEvent,
    }
  ]
})
