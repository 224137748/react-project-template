import React, { useCallback, useMemo } from 'react';
import SimpleBarReact from 'simplebar-react';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/es/interface';
import { useLocation } from 'react-router-dom';
import { history } from 'utils';
import router from '../routes';



const Sider = () => {
  const { pathname } = useLocation();

  const selectedKey = useMemo(() => {
    const path = pathname.split('/').filter(Boolean).slice(1);
    return path.length ? path : ['/'];
  }, [pathname]);

  const handleMenuItemClick = useCallback(({ key }: MenuInfo) => {
    const paths = history.location.pathname.split('/');
    if (!paths.includes(key as string)) {
      history.push(key === '/' ? '/app' : `/app/${key}`);
    }
  }, []);

  const Menus = useMemo(() => {
    return router.map((routerItem) => {
      return (
        <section className="side-menu" key={routerItem.type}>
          <div className="menu-head">
            {routerItem.icon}
            <div className="menu-title" >
              {routerItem.title}
            </div>
          </div>
          <Menu selectedKeys={selectedKey}>
            {
              routerItem.routes.map(route => (
                <Menu.Item key={route.key} onClick={handleMenuItemClick}>
                  {route.title}
                  <span className="ant-menu-item-box ant-menu-item-box--top" />
                  <span className="ant-menu-item-box ant-menu-item-box--bottom" />
                </Menu.Item>
              ))
            }
          </Menu>
        </section>

      );
    });
  }, [selectedKey, handleMenuItemClick]);
  return (
    <aside className="app__sider">
      <SimpleBarReact style={{ height: 'calc(100vh - 60px)' }}>
        {Menus}
      </SimpleBarReact>
    </aside>
  );
};

export default Sider;