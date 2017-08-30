import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Box from '@/components/box'
// import Todo from '@/components/Todolist'
import Student from '@/components/Student'


import TodoDemo from '@/components/Todo'


Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,

    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/box',
      name: 'Box',
      component: Box
    },
    {
      path: '/todo',
      name: 'Todo',
      component: TodoDemo
    },
    {
      path: '/student',
      name: 'student',
      component: Student
    }
  ],
  linkActiveClass: 'active'
})

router.push('box')
export default  router;
//moudle.exports.router = new Router;
