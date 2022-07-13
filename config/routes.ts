import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

const routes: IConfigFromPlugins['routes'] = [
  { path: '/login', component: '@/pages/page1', exact: true },
  {
    path: '/',
    component: '@/layouts/commLayout/index',
    routes: [
      { path: '/', component: '@/pages/page1', exact: true },
      { path: '/page1', component: '@/pages/page1', exact: true },
      { path: '/page2', component: '@/pages/page2', exact: true },
      { component: '@/pages/404/index' }, // 最后注册 404
    ],
  },
  { component: '@/pages/404/index' }, // 最后注册 404
];

export default routes;
