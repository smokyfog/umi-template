import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  publicPath: '/',
  favicon: '/logo.png',
  // hash: true,
  // history: {
  //     type: 'hash',
  // },
  // layout: {
  //     // 需要提前安装 @ant-design/pro-layout
  //     title: 'Lego 后台管理',
  //     logo: '/logo.png',
  // },

  routes, // 路由配置

  // 启用 mfsu 后，热启动得到 **10 倍** 提升；热更新提升 **50%**  以上！
  mfsu: {},

  // 定义全局变量
  define: {
    'process.env.ENV': 'dev',
  },

  nodeModulesTransform: {
    type: 'none',
  },

  locale: {},

  fastRefresh: {},
});
