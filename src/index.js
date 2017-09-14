import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store, { BuildStore } from './redux/store';
import ApiClient from './helpers/ApiClient';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const ApiClientStore = BuildStore(new ApiClient(), history);
import getRouter from './router/router';
import { Router } from 'react-router';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ApiClientStore}>
        <Router history={history}>
          {RootElement}
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById("app")
  );
}
