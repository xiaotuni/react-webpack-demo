import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import BuildStore from './redux/store';
import ApiClient from './helpers/ApiClient';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const ApiClientStore = BuildStore(new ApiClient(), history);
import getRouter from './router/router';
import { Router } from 'react-router';

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={ApiClientStore} key="provider">
        <Router history={history}>
          {RootElement}
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
}

/**
 * 初始化
 */
renderWithHotReload(getRouter());

/**
 * 热更新
 */
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter1 = require('./router/router').default;
    renderWithHotReload(getRouter1());
  });
}
