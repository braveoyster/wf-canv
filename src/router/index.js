import Vue from 'vue';
import Router from 'vue-router';

import AdminRoot from '../admin/AdminRoot';
import Posts from '../admin/Posts';

Vue.use(Router);

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
// import UserView from '../views/UserView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/admin',
      component: AdminRoot,
      children: [
        {
          path: 'posts',
          component: Posts
        }
      ]
    },
    {
      path: '/test',
      component: { template: '<h1>ssssssssss</h1>' }
    },
    { path: '/', redirect: '/test' },
  ],
});
