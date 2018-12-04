import Vue from 'vue';
import Router from 'vue-router';
import CoworkMain from '@/components/layouts/cowork/CoworkMain';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: CoworkMain,
    },
  ]
});
