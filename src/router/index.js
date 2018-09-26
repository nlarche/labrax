import Vue from 'vue';
import Router from 'vue-router';
import List from '@/components/List';
import Detail from '@/components/Detail';
import { getRegion } from '@/service/region';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: `/${getRegion().key}`,
    },
    {
      path: '/:reg',
      name: 'List',
      component: List,
    },
    { path: '/:reg/:id',
      name: 'Detail',
      component: Detail,
    },
  ],
});
