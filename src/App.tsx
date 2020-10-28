import 'react-app-polyfill/stable';

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { lazy } from '@loadable/component';
import { RootState } from 'app/store';
import LoadableRoot from 'components/LoadableRoot';
import NotFound from 'components/NotFound';
import Home from 'layouts';
import pMinDelay from 'p-min-delay';
import isEqual from 'lodash/isEqual';
import './App.less';

const Login = lazy(() => pMinDelay(import(/* webpackPrefetch: true, webpackChunkName: "login" */ 'features/Login'), 300));

const appSelector = createSelector((state: RootState) => state.global.loading, (loading) => ({
  loading
}));


const App = () => {
  const { loading } = useSelector(appSelector, isEqual);
  console.log('redux_global_state_loadingType:', loading);

  return (
    <div className="app">
      <LoadableRoot>
        <Switch>
          <Redirect from="/" to="/app" exact key="route-redirect"/>,
          <Route path="/app" component={Home} key="route-app" />,
          <Route path="/login" component={Login} key="route-login" />,
          <Route key="route-notfound" component={ NotFound } />
        </Switch>
      </LoadableRoot>
    </div>
  );
};

export default App;
