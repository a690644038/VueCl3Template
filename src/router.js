import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

var router = new Router({
  // eslint-disable-next-line no-undef
  // mode: "history",//  seo预渲染
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/test:id',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/a/test.vue'),
      children: [
        {
          path: '/test/a_child',
          name: 'child1',
          components: {
            child1: () => import('./views/a/a-child/a_child.vue')
          }
        },
        {
          path: '/test/b_child',
          name: 'child2',
          components: {
            child2: () => import('./views/a/a-child/b_child.vue')
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 显示加载中动画 */
  if (to.meta.requireAuth) {
    console.log(1111)
  } else {
    store.commit('updateLoadingStatus', true);
    next();
  }
});

router.afterEach(route => {
  /* 隐藏加载中动画 */
  // store.commit('updateLoadingStatus', false);
});


export default router
