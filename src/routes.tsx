import React from 'react';
import { SettingOutlined, ShoppingOutlined } from '@ant-design/icons';
import { lazy, LoadableComponent } from '@loadable/component';
import pMinDelay from 'p-min-delay';

export interface RouteProps {
  title: string;
  key: string;
  path: string;
  component: LoadableComponent<unknown>;
  routes?: Array<RouteProps>;
}

export interface RouterProps {
  type: 'system' | 'business';
  title: string;
  icon: string | React.ReactNode;
  routes: Array<RouteProps>
}
const DEALY = 300;

const Menu = lazy(() => pMinDelay(import(/* webpackChunkName: "menu" */ 'features/Menu'), DEALY));
const Account = lazy(() => pMinDelay(import(/* webpackChunkName: "account",webpackPrefetch: true */ 'features/Account'), DEALY));

const Table = lazy(() => pMinDelay(import(/* webpackChunkName: "table",webpackPrefetch: true */ 'features/Table'), DEALY));

const CodeTable = lazy(() => pMinDelay(import(/* webpackChunkName: "codeTable",webpackPrefetch: true */ 'features/CodeTable'), DEALY));

const Params = lazy(() => pMinDelay(import(/* webpackChunkName: "params",webpackPrefetch: true */ 'features/Params'), DEALY));

const Store = lazy(() => pMinDelay(import(/* webpackChunkName: "store",webpackPrefetch: true */ 'features/Store'), DEALY));

const Goods = lazy(() => pMinDelay(import(/* webpackChunkName: "goods",webpackPrefetch: true */ 'features/Goods'), DEALY));

const GoodsParams = lazy(() => pMinDelay(import(/* webpackChunkName: "goodsParams",webpackPrefetch: true */ 'features/GoodsParams'), DEALY));


const router: RouterProps[] = [
  {
    type: 'system',
    title: '系统管理',
    icon: <SettingOutlined />,
    routes: [{
      title: '菜单管理',
      key: '/',
      path: '/app',
      component: Menu
    }, {
      title: '账户管理',
      key: 'account',
      path: '/app/account',
      component: Account
    }, {
      title: '码表管理',
      key: 'table',
      path: '/app/table',
      component: Table
    }, {
      title: '复杂码表管理',
      key: 'codeTable',
      path: '/app/codeTable',
      component: CodeTable
    }, {
      title: '参数管理',
      key: 'params',
      path: '/app/params',
      component: Params
    }]
  }, {
    type: 'business',
    title: '业务管理',
    icon: <ShoppingOutlined style={{ color: 'red' }} />,
    routes: [{
      title: '商家管理',
      key: 'store',
      path: '/app/store',
      component: Store
    }, {
      title: '商品管理',
      key: 'goods',
      path: '/app/goods',
      component: Goods
    }, {
      title: '商品参数管理',
      key: 'goodsParams',
      path: '/app/goodsParams',
      component: GoodsParams
    }]
  }
];

export default router;