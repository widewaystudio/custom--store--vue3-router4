import { createRouter, createWebHashHistory,onBeforeRouteUpdate } from 'vue-router';
import {store} from '../store/loginuser';
import Home from '../views/Home.vue'
import Loading from '../views/Loading.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
        path:'/login',
        name:'Login',
        component:function(){
            return import('../views/Login.vue');
        },

    },
    {
        path:'/loading',
        name:'Loading',
        component:Loading
    },
  {
    path: '/about',
    name: 'About',
      params:{id:123},
      meta:{flg:true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to,from,next)=>{
   if(to.meta.flg ){
       const s = store.status;
       if(s === "loading"){
           next({name:'Loading',query:{url:to.name}});
       }else if(s === 'login'){
          if(store.user.u === 'admin'){
              next();
          }else{
              next({name:'Home'})
          }

       }else{
           next({name:'Login',query:{url:to.path}})
       }
   }else{
       next();
   }

})

export default router
