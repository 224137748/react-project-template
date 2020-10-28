import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { history } from 'utils';
import { store } from 'app/store';
import zhCN from 'antd/es/locale/zh_CN';
import 'simplebar/src/simplebar.css';
import './index.less';


const render = () => {
  const App = require('./App').default;
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render);
}