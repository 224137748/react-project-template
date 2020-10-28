import React, { useEffect, useMemo, useRef } from 'react';
import AuthRoute from 'app/AuthRoute';
import SimpleBarReact from 'simplebar-react';
import LoadableRoot from 'components/LoadableRoot';
import NotFound from 'components/NotFound';
import { BackTop } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { history } from 'utils';
import router, { RouteProps } from '../routes';


const Content = () => {
  const prevPathname = useRef<string>(history.location.pathname);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const unlisten = history.listen(route => {
      window.requestAnimationFrame(() => {
        if (prevPathname.current !== route.pathname && ref.current && ref.current.scrollTop! > 0) {
          ref.current.scrollTop = 0;
        }
      });
    });
    return () => unlisten();
  }, []);

  const routes = useMemo(() => {
    let _routes: RouteProps[] = [];
    router.forEach(routerItem => {
      _routes = _routes.concat(routerItem.routes);
    });
    return _routes;
  }, []);

  return (
    <main className="app__content">
      <SimpleBarReact style={{ height: 'calc(100vh - 60px)', padding: '30px 30px 0 ' }} scrollableNodeProps={{ ref }}>
        <LoadableRoot>
          <Switch>
            {
              routes.map(route => {
                return (
                  <AuthRoute key={`route_${route.key}`} exact={route.path === '/app'} path={route.path === '/' ? '/app' : route.path}>
                    <route.component />
                  </AuthRoute>
                );
              })
            }
            <Route component={NotFound} />
          </Switch>
        </LoadableRoot>

      </SimpleBarReact>
      <BackTop target={() => ref.current!} style={{ right: 36, bottom: 84 }} />
    </main>
  );
};

export default Content;